import React from "react"
import * as C from "./styles"

import Image from "next/image"
import { Subtitle, Title } from "@/components"

import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

import { useDevice } from "@/hooks/useDevice"
import ContentBox from "../ContentBox"
import { tokens } from "@/utils/tokens"
import { qualityList } from "@/utils/dataObjects"
import Description from "../Description"

const CustomQuality: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      py={tokens.space.sizeXl}
    >
      <Title style={{ marginBottom: 24 }}>
        Maximize o seu potencial financeiro com antecipações de precatórios de
        líderes confiáveis
      </Title>
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
                <Description>{item.subtitle}</Description>
              </C.Item>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <C.Content>
          {qualityList.map((item, index) => (
            <C.Item key={index}>
              <Image
                src={item.img}
                width={50}
                height={50}
                alt="img"
                style={{
                  width: "50px",
                  height: "50px",
                }}
              />
              <Title
                style={{
                  fontSize: "1.5rem",
                }}
              >
                {item.title}
              </Title>
              <Description
                style={{
                  textAlign: "center",
                }}
              >
                {item.subtitle}
              </Description>
            </C.Item>
          ))}
        </C.Content>
      )}
    </ContentBox>
  )
}

export default CustomQuality
