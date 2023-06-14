import React from "react";
import * as C from "@/styles/about";
import Image from "next/image";
import { Card, CustomQuality, Subtitle, Title } from "@/components";

import governimg from "../../../public/assets/images/government.jpg";
import PurposeForm from "@/components/PurposeForm";

import { useApp } from "@/context/contextApi";
import Chart from "@/components/Chart";

const About: React.FC = () => {
  const { cardsList, avatarData } = useApp();

  const points = [
    "Potencial de retorno financeiro significativo, uma vez que os precatórios podem ser adquiridos com descontos substanciais.",
    "Estabilidade e segurança jurídica, pois os precatórios são obrigações judiciais emitidas pelo governo, geralmente garantindo o pagamento futuro.",
    "Diversificação de portfólio, permitindo aos investidores mitigar riscos e aproveitar oportunidades alternativas de investimento.",
    "Possibilidade de utilização de precatórios para compensação de débitos fiscais, proporcionando benefícios fiscais adicionais.",
    "O cenário econômico atual e a expectativa de recuperação pós-pandemia tornam os precatórios uma opção atraente para investidores em busca de oportunidades lucrativas e seguras.",
  ];

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

      <C.ContainerChart>
        <Title
          color="#000"
          marginTop="80px"
          fontSize="29px"
          fontWeight="600"
          text="Porquê investir em precatórios?"
          marginBottom="50px"
        />
        {points.map((point, index) => (
          <Subtitle
            key={index}
            color="#000"
            fontSize="18px"
            fontWeight="400"
            marginBottom="10px"
            text={point}
          />
        ))}
        <Chart />
      </C.ContainerChart>

      <C.VideoContainer>
        <Title
          fontSize="32px"
          fontWeight="500"
          color="#000"
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
