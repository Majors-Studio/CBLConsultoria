import React from "react";
import * as C from "./styles";
// import { Container } from './styles';

const about: React.FC = () => {
  return (
    <C.Container>
      <C.ContainerImg></C.ContainerImg>

      <C.FlexCol>
        <C.MeetTitle></C.MeetTitle>
        <C.Video />
      </C.FlexCol>

      <C.JustifyBetween>
        {/* Componente com image, title e text */}
      </C.JustifyBetween>

      <C.Title>Somos líderes em antecipações de precatório no Brasil</C.Title>
      <C.Description></C.Description>

      {/* Componente com ( subtititle e text) */}

      <C.Title>Faça o tour virtual pelo nosso escritório</C.Title>
      <C.Video></C.Video>

      <C.Title></C.Title>
    </C.Container>
  );
};

export default about;
