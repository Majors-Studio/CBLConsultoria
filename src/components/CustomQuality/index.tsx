import React from "react";
import bgImg from "../../../public/assets/images/bgImg.jpg";
import * as C from "./styles";
import Image from "next/image";
import { Title, Subtitle } from "@/components";

const CustomQuality: React.FC = () => {
  const qualities = [
    {
      id: 1,
      img: bgImg,
      title: "Transparência e segurança",
      subtitle:
        "Garantimos a proteção dos seus dados e mantemos uma comunicação clara em todas as etapas. Sua confiança é nossa prioridade.",
    },
    {
      id: 2,
      img: bgImg,
      title: "Atendimento personalizado",
      subtitle:
        "Nossa equipe está pronta para oferecer suporte especializado em todas as etapas da negociação do seu precatório.",
    },
    {
      id: 3,
      img: bgImg,
      title: "Credibilidade",
      subtitle:
        "Somos a maior empresa especializada na antecipação de precatórios em todo o Brasil, já negociamos mais de R$ 1 bilhão em precatórios para mais de 7 mil clientes",
    },
  ];

  return (
    <>
      {qualities.map((item) => (
        <C.Container key={item.id}>
          <Image src={item.img as any} width={120} height={120} alt="image" />
          <Title
            color="#000"
            fontSize="22px"
            fontWeight="700"
            text={item.title}
          />
          <Subtitle fontSize="17px" text={item.subtitle} />
        </C.Container>
      ))}
    </>
  );
};

export default CustomQuality;
