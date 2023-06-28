import React from "react";
import * as C from "./styles";

import Image from "next/image";
import { Title, Subtitle } from "@/components";

// Swiper configs
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDevice } from "@/hooks/useDevice";

interface CustomQualityProps {
  data: {
    id: number;
    img: string;
    title: string;
    subtitle: string;
  }[];
}

const CustomQuality: React.FC<CustomQualityProps> = ({data}) => {
  const { isMobile } = useDevice();
  
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      navigation={false}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
          <C.Container key={item.id}>
            <Image src={item.img} width={50} height={50} alt="img" />
            <Title  text={item.title} />
            <Subtitle color="#333" text={item.subtitle} />
          </C.Container>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CustomQuality;
