import React, { useState } from "react";

import * as S from "./styles";

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
    <S.Container>
      <S.Title>Receba uma Proposta</S.Title>
      <S.Subtitle>
        Preencha o formulário abaixo e receba uma proposta detalhada e
        personalizada para você.
      </S.Subtitle>

      <S.Form>
        <S.Input placeholder="Nome" name="name" onChange={handleInputChange} />
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
        <S.Button type="submit">Enviar</S.Button>
      </S.Form>
    </S.Container>
  );
};

export default PurposeForm;