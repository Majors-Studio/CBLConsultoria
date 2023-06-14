import React from "react";
import * as C from "@/styles/about";
import Image from "next/image";
import { Card, CustomQuality, Subtitle, Title } from "@/components";

import governimg from "../../../public/assets/images/government.jpg";
import PurposeForm from "@/components/PurposeForm";

import { useApp } from "@/context/contextApi";

const About: React.FC = () => {
  const { cardsList, avatarData } = useApp();

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
          text="Descubra uma nova oportunidade de investimento seguro e rentável com a nossa plataforma de venda de precatórios."
          marginBottom="20px"
        />
        <Subtitle text="Aqui, você encontrará uma seleção abrangente de precatórios verificados e validados, garantindo transparência e segurança em todas as transações." />
      </C.ContainerText>

      <C.VideoContainer>
        <Title
          fontSize="36px"
          fontWeight="bold"
          text="Fique um pouco mais por dentro do nosso trabalho"
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
      </C.VideoContainer>

      <C.SwiperContainer>
        <CustomQuality />
      </C.SwiperContainer>

      {/* Área para cards (conhecimento de especialistas), ideia de coloar animações */}
      <C.CardContainer>
        {cardsList.map((card) => (
          <>
            <Card
              key={card.id}
              index={card.id}
              title={card.title}
              description={card.description}
            />
          </>
        ))}
      </C.CardContainer>

      <Title text="Conheça os responsáveis pelos nossos negócios" />
      <C.AvatarsContainer>
        {avatarData.map((avatar, index) => (
          <C.Info key={index}>
            <Image
              src={avatar.img}
              alt="avatar"
              style={{ borderRadius: "505%" }}
              width={60}
              height={60}
            />
            <C.AvatarName>{avatar.name}</C.AvatarName>
            <C.AvatarCharge>{avatar.charge}</C.AvatarCharge>
          </C.Info>
        ))}
      </C.AvatarsContainer>

      <C.FormContainer>
        <Image src={governimg} width={750} alt="image" />
        <PurposeForm />
      </C.FormContainer>
    </C.Container>
  );
};

export default About;
