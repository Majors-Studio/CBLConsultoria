import React, { useState } from "react";

import * as S from "./styles";
import CtaButton from "../CtaButton";
import Subtitle from "../Subtitle";

const PurposeForm: React.FC = () => {
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

  return (
    <div>
      <div id="purposeForm" />
      <S.Container>
        <S.Content>
        <S.Title>Receba uma Proposta</S.Title>
        <Subtitle>
          Preencha o formulário abaixo e receba uma proposta detalhada e
          personalizada para você.
        </Subtitle>

        <S.Form>
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
          <S.Input placeholder="CPF" name="cpf" onChange={handleInputChange} />

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
