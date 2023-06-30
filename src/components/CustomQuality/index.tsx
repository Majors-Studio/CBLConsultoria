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

const CustomQuality: React.FC<CustomQualityProps> = ({ data }) => {
  const { isMobile } = useDevice();

  return isMobile ? (
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
          <C.Item key={item.id}>
            <Image
              style={{
                width: "75px",
                height: "75px",
              }}
              src={item.img}
              width={75}
              height={75}
              alt="img"
            />
            <Title>{item.title}</Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </C.Item>
        </SwiperSlide>
      ))}
    </Swiper>
  ) : (
    <C.Container>
      <C.Content>
        {data.map((item, index) => (
          <C.Item key={index}>
            <Image
              style={{
                width: "50px",
                height: "50px",
              }}
              src={item.img}
              width={50}
              height={50}
              alt="img"
            />
            <Title
              style={{
                fontSize: "1.5rem",
              }}
            >
              {item.title}
            </Title>
            <Subtitle>{item.subtitle}</Subtitle>
          </C.Item>
        ))}
      </C.Content>
    </C.Container>
  );
};

export default CustomQuality;
