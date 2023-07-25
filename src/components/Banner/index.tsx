import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import "swiper/css"
import "swiper/css/autoplay"

import ArrowDownIcon from "@/assets/icons/ArrowDownIcon"

import * as S from "./styles"
import { useApp } from "@/context/appContext"
import { Autoplay } from "swiper"
import { bannerList } from "@/utils/dataObjects"
import { tokens } from "@/utils/tokens"
import Title from "../Title"
import Logo from "../Logo"

const Banner: React.FC = () => {
  const { isTop, screenSizeH, screenSizeW } = useApp()

  return (
    <div
      style={{
        position: "relative",
        height: screenSizeH - tokens.spaceNumber.sizeXxxl,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: tokens.space.sizeXxxl,
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        style={{
          maxHeight: screenSizeH - tokens.spaceNumber.sizeXxxl,
          overflow: "hidden",
        }}
      >
        {bannerList.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              style={{
                height: screenSizeH - tokens.spaceNumber.sizeXxxl,
                maxHeight: "100vh",
                overflow: "hidden",
                position: "relative",
                width: "100vw",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {index === 0 && <Logo />}
                <Title variant="secondary">
                  {item.title}
                </Title>
              </div>
              <Image
                src={item.img}
                width={screenSizeW}
                alt="img"
                loading="eager"
                priority
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  objectPosition: "top",
                  zIndex: -1,
                  height: "100%",
                }}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {isTop && (
        <S.ArrowDown href="#videoshowcase">
          <ArrowDownIcon />
        </S.ArrowDown>
      )}
    </div>
  )
}

export default Banner
