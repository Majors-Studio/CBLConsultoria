import React, { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import * as S from "./styles"
import CtaButton from "../CtaButton"
import { useApp } from "@/context/appContext"

import { MaskedInput } from "@/components"
import Anchor from "../Anchor"

const PurposeForm: React.FC = () => {
  const form = useRef()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    message: "",
  })

  const { setToast } = useApp()
  const [sending, setSending] = useState<boolean>(false)

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
          email: "",
          phone: "",
          cpf: "",
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
    <S.Container>
      <Anchor id="purposeForm" />
      <S.Content>
        <S.Title>Entre em contato</S.Title>
        <S.Form action="#" onSubmit={sendEmail} ref={form}>
          <S.Input
            placeholder="Nome"
            name="name"
            onChange={handleInputChange}
            required
          />
          <S.Input
            placeholder="Email"
            name="email"
            type="email"
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
          <MaskedInput
            name="cpf"
            mask="999.999.999-99"
            placeholder="CPF"
            onChange={handleInputChange}
            required
          />

          <S.TextArea
            placeholder="Mensagem"
            name="message"
            onChange={handleInputChange}
          />
          <CtaButton disabled={sending ? true : false} type="submit">
            Enviar
          </CtaButton>
        </S.Form>
      </S.Content>
    </S.Container>
  )
}

export default PurposeForm
