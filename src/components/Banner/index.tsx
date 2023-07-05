import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import Image from "next/image"

import "swiper/css"
import ArrowDownIcon from "@/assets/icons/ArrowDownIcon"

import * as S from "./styles"
import { useApp } from "@/context/appContext"

interface BannerProps {
  data: {
    img: string
  }[]
}

const Banner: React.FC<BannerProps> = ({ data }) => {
  const { isTop, screenSizeH, screenSizeW } = useApp()

  return (
    <div
      style={{
        position: "relative",
        height: "fit-content",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        style={{
          marginTop: "120px",
          maxHeight: screenSizeH - 120,
          overflow: "hidden",
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              height: "100%",
              maxHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Image
              src={item.img}
              width={screenSizeW}
              height={screenSizeH - 120}
              alt="img"
              loading="eager"
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: screenSizeH - 120,
              }}
            />
          </SwiperSlide>
        ))}
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
