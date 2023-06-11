import React from "react";
import * as C from "./styles";

import Image from "next/image";
import { Title, Subtitle } from "@/components";

// Swiper configs
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomQuality: React.FC = () => {
  const qualities = [
    {
      id: 1,
      img: "https://svgsilh.com/svg_v2/154684.svg",
      title: "Transparência e segurança",
      subtitle:
        "Garantimos a proteção dos seus dados e mantemos uma comunicação clara em todas as etapas. Sua confiança é nossa prioridade.",
    },
    {
      id: 2,
      img: "https://svgsilh.com/svg/2029303.svg",
      title: "Atendimento personalizado",
      subtitle:
        "Nossa equipe está pronta para oferecer suporte especializado em todas as etapas da negociação do seu precatório.",
    },
    {
      id: 3,
      img: "https://svgsilh.com/svg_v2/1414791.svg",
      title: "Credibilidade",
      subtitle:
        "Somos a maior empresa especializada na antecipação de precatórios em todo o Brasil, já negociamos mais de R$ 1 bilhão em precatórios para mais de 7 mil clientes",
    },
  ];

  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {qualities.map((item) => (
        <SwiperSlide>
          <C.Container key={item.id}>
            <Image src={item.img} width={50} height={50} alt="img" />
            <Title fontWeight="500" color="#000" text={item.title} />
            <Subtitle color="#000" text={item.subtitle} />
          </C.Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomQuality;
