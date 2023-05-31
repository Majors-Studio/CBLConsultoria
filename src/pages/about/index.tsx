import React from "react";
import * as C from "./styles";
import Image from "next/image";
import { Subtitle, Title } from "@/components";

import bgImg from "../../../public/assets/images/bgAbout.jpg";
// import { Container } from './styles';

const about: React.FC = () => {
  return (
    <C.Container>
      <C.ContainerImg>
        <Image
          style={{
            position: "relative",
            height: "200px",
            objectFit: "cover",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          src={bgImg}
          alt="bg"
        />
        <C.Overlay />
        <Title
          color="#fff"
          top="50%"
          fontWeight="bold"
          fontSize="40px"
          left="50%"
          transform="translate(-50%, -50%)"
          position="absolute"
          text="Sobre nós"
        />
      </C.ContainerImg>

      <C.FlexCol>
        <Title fontSize="36px" fontWeight="bold" text="Conheça a D.Andrade" />
        <C.Video />
      </C.FlexCol>

      <C.JustifyBetween>
        {/* Componente com image, title e text */}
      </C.JustifyBetween>

      <Title
        fontSize="29px"
        fontWeight="600"
        text="Somos líderes em antecipações de precatórios no Brasil"
      />
      <Subtitle text="A D.Andrade  é referência em precatórios. Com mais de uma década de experiência negociamos mais de R$ 1 bilhão em precatórios e contramos com a satisfação de mais de 7 mil clientes." />

      {/* Componente com ( subtititle e text) */}

      <Title text="Nossa missão" />
      <C.Video></C.Video>

      <C.Title></C.Title>
    </C.Container>
  );
};

export default about;
