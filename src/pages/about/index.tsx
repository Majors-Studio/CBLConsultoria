import React from "react";
import * as C from "./styles";
import Image from "next/image";
import { CustomQuality, Subtitle, Title } from "@/components";

import bgImg from "../../../public/assets/images/bgImg.jpg";

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
        <iframe
          style={{ marginBottom: "20px", marginTop: "20px" }}
          allowFullScreen
          uk-video="automute: true"
          width="70%"
          height="600px"
          src={`https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=0&controls=0&rel=1`}
        ></iframe>
      </C.FlexCol>

      <C.JustifyBetween>
        <CustomQuality />
      </C.JustifyBetween>

      <C.ContainerText>
        <Title
          marginTop="80px"
          fontSize="29px"
          fontWeight="600"
          text="Somos líderes em antecipações de precatórios no Brasil"
          marginBottom="20px"
        />
        <Subtitle text="A D.Andrade  é referência em precatórios. Com mais de uma década de experiência negociamos mais de R$ 1 bilhão em precatórios e contramos com a satisfação de mais de 7 mil clientes." />
      </C.ContainerText>

      <C.FlexCol>
        <Title
          fontSize="36px"
          fontWeight="bold"
          text="Faça o tour virtual pelo nosso escritório"
          marginBottom="20px"
          marginTop="20px"
        />
        <iframe
          style={{ marginBottom: "20px", marginTop: "20px" }}
          allowFullScreen
          uk-video="automute: true"
          width="70%"
          height="600px"
          src={`https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=0&controls=0&rel=1`}
        ></iframe>
      </C.FlexCol>

      <C.FlexCol>
        <Title text="Conheça nossos especialistas" marginBottom="50px" />
        <Subtitle text="Nossa equipe está pronta para oferecer suporte especializado em todas as etapas da negociação do seu precatório." />
      </C.FlexCol>
    </C.Container>
  );
};

export default about;
