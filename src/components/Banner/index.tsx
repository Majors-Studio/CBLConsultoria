import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

import * as S from "./styles";
import { useApp } from "@/context/appContext";
import { Autoplay } from "swiper";
import { bannerList } from "@/utils/dataObjects"


const Banner: React.FC = () => {
  const { isTop, screenSizeH, screenSizeW } = useApp();

  return (
    <div
      style={{
        position: "relative",
        height: screenSizeH - 120,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "120px",
      }}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 3000 }}
        style={{
          maxHeight: screenSizeH - 120,
          overflow: "hidden",
        }}
      >
        {bannerList.map((item, index) => {
          return (
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
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: screenSizeH - 120,
              }}
            />
          </SwiperSlide>
        )})}
      </Swiper>
      {isTop && (
        <S.ArrowDown href="#videoshowcase">
          <ArrowDownIcon />
        </S.ArrowDown>
      )}
    </div>
  );
};

export default Banner;
