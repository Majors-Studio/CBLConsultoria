import React from "react";
import * as C from "./styles";

import Image from "next/image";
import { Title, Subtitle } from "@/components";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useDevice } from "@/hooks/useDevice";
import ContentBox from "../ContentBox";
import { tokens } from "@/utils/tokens";
import { qualityList } from "@/utils/dataObjects";

const CustomQuality: React.FC = () => {
  const { isMobile } = useDevice();
  return (
    <ContentBox bgColor={tokens.colors.brand.lightCream} py={"60px"}>
      {isMobile ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination]}
          navigation={false}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {qualityList.map((item, index) => (
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
            {qualityList.map((item, index) => (
              <C.Item key={index}>
                <Image src={item.img} width={50} height={50} alt="img" />
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
      )}
    </ContentBox>
  );
};

export default CustomQuality;
