import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import * as S from "./styles"
import CtaButton from "../CtaButton"
import { useApp } from "@/context/appContext"

import { MaskedInput, Title } from "@/components"
import Anchor from "../Anchor"
import ContentBox from "../ContentBox"
import { tokens } from "@/utils/tokens"
import { useDevice } from "@/hooks/useDevice"

const JudicialForm: React.FC = () => {
  const{isMobile}=useDevice()
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "",
    message: "",
  })

  const { setToast } = useApp()
  const [sending, setSending] = useState<boolean>(false)

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)

    setToast({
      message: "Enviando...",
      type: "sending",
    })

    setTimeout(() => {
      emailjs
        .sendForm(
          process.env.SERVICE_ID as string,
          process.env.TEMPLATE_ID as string,
          e.target as HTMLFormElement,
          process.env.PUBLIC_KEY
        )
        .then(() => {
          setToast({
            message: "Proposta enviada com sucesso!",
            type: "success",
          })
          setFormData({
            name: "",
            phone: "",
            subject: "",
            message: "",
          })
          setSending(false)
        })
        .catch(() => {
          setToast({
            message: "Erro no envio da proposta!",
            type: "error",
          })
        })
        .finally(() => {
          setTimeout(() => {
            setToast(null)
            setSending(false)
          }, 3000)
        })
    }, 500)
  }

  return (
    <ContentBox bgColor={tokens.colors.brand.lightCream}>
      <Anchor id="purposeForm" />
      <S.Container>
      <Title>Receba uma proposta personalizada</Title>
      <S.Form action="#" onSubmit={sendEmail} ref={form}>
        <S.Input
          placeholder="Nome"
          name="name"
          onChange={handleInputChange}
          required
        />

        <MaskedInput
          name="phone"
          mask="(99) 99999-9999"
          placeholder="Telefone"
          onChange={handleInputChange}
          required
        />

        <S.Select
          placeholder="Assunto"
          name="subject"
          required
          onChange={handleInputChange}
        >
          <option disabled selected value="selecione">
            Selecione um assunto
          </option>
          <option value="Consultoria Jurídica">Consultoria Jurídica</option>
          <option value="Precatório">Precatório</option>
          <option value="Gestão de Recursos">Gestão de Recursos</option>
          <option value="Outro">Outro</option>
        </S.Select>

        <S.TextArea
          placeholder="Mensagem"
          name="message"
          onChange={handleInputChange}
        />
        <CtaButton disabled={sending ? true : false} type="submit">
          Enviar
        </CtaButton>
      </S.Form>
      </S.Container>
    </ContentBox>
  )
}

export default JudicialForm
