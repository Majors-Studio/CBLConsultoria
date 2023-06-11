import React from "react";
import * as C from "@/styles/about";
import Image from "next/image";
import { Card, CustomQuality, Subtitle, Title } from "@/components";

import bgImg from "../../../public/assets/images/bgImg.jpg";
import governimg from "../../../public/assets/images/government.jpg";
import PurposeForm from "@/components/PurposeForm";

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
          src={governimg}
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

      <C.ContainerText>
        <Title
          marginTop="80px"
          fontSize="29px"
          fontWeight="600"
          text="Somos líderes em antecipações de precatórios no Brasil"
          marginBottom="20px"
        />
        <Subtitle text="Somos referência quando se fala em precatório, com mais de uma década de experiência negociamos mais de R$ 1 bilhão em precatórios e contramos com a satisfação de mais de 7 mil clientes." />
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

      <C.JustifyBetween>
        <CustomQuality />
      </C.JustifyBetween>

      {/* Área para cards (conhecimento de especialistas), ideia de coloar animações */}
      <C.CardContainer>
        <Card
          title="Início da nossa trajetória de sucesso"
          description="Em 2009, demos nossos primeiros passos, dando início de um compromisso de excelência."
        />
        <Card
          title="Profissionais especializados"
          description="Nossa equipe é formada por profissionais especializados em precatórios, com mais de 10 anos de experiência no mercado."
        />
        <Card
          title="Mais de R$ 1 bilhão negociados"
          description="Já negociamos mais de R$ 1 bilhão em precatórios e contamos com a satisfação de mais de 7 mil clientes."
        />
      </C.CardContainer>

      <C.FormContainer>
        <Image src={governimg} width={750} alt="image" />
        <PurposeForm />
      </C.FormContainer>
    </C.Container>
  );
};

export default about;
