import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";
import CtaButton from "../CtaButton";
import Toast from "@/components/Toast";
import { useApp } from "@/context/appContext";
import { TIMEOUT } from "dns";

const PurposeForm: React.FC = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    message: "",
  });
  const { setShowToast, setToastMessage, setType }: any = useApp();

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        e.target as HTMLFormElement,
        process.env.PUBLIC_KEY
      )
      .then(() => {
        setShowToast(true);
        setToastMessage("Proposta enviada com sucesso!");
        setType("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          cpf: "",
          message: "",
        });
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      })
      .catch(() => {
        setShowToast(true);
        setToastMessage("Erro no envio da proposta!");
        setType("error");
        setTimeout(() => {
          setShowToast(false);
        }, 3000);
      });
  };

  return (
    <div>
      <div id="purposeForm" />
      <S.Container>
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
              onChange={handleInputChange}
              required
            />
            <S.Input
              placeholder="Telefone"
              name="phone"
              onChange={handleInputChange}
              required
            />
            <S.Input
              placeholder="CPF"
              name="cpf"
              onChange={handleInputChange}
              required
            />

            <S.TextArea
              placeholder="Mensagem"
              name="message"
              onChange={handleInputChange}
              required
            />
            <CtaButton type="submit">Enviar</CtaButton>
          </S.Form>
        </S.Content>
      </S.Container>
    </div>
  );
};

export default PurposeForm;
