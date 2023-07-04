import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import * as S from "./styles";
import CtaButton from "../CtaButton";

const PurposeForm: React.FC = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cpf: "",
    message: "",
  });

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
      .then((result) => {
        console.log(result.text);
        alert("Mensagem enviada com sucesso!");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div id="purposeForm" />
      <S.Container>
        <S.Content>
          <S.Title>Entre em contato</S.Title>
          <S.Form onSubmit={sendEmail} ref={form}>
            <S.Input
              placeholder="Nome"
              name="name"
              onChange={handleInputChange}
            />
            <S.Input
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
            />
            <S.Input
              placeholder="Telefone"
              name="phone"
              onChange={handleInputChange}
            />
            <S.Input
              placeholder="CPF"
              name="cpf"
              onChange={handleInputChange}
            />

            <S.TextArea
              placeholder="Mensagem"
              name="message"
              onChange={handleInputChange}
            />
            <CtaButton type="submit">Enviar</CtaButton>
          </S.Form>
        </S.Content>
      </S.Container>
    </div>
  );
};

export default PurposeForm;
