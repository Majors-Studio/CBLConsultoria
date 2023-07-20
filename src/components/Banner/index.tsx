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
import { tokens } from "@/utils/tokens";


const Banner: React.FC = () => {
  const { isTop, screenSizeH, screenSizeW } = useApp();

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
              height: "100%",
              maxHeight: "100vh",
              overflow: "hidden",
            }}
          >
            <Image
              src={item.img}
              width={screenSizeW}
              height={screenSizeH - tokens.spaceNumber.sizeXxxl}
              alt="img"
              loading="eager"
              priority
              style={{
                objectFit: "cover",
                objectPosition: "center",
                height: screenSizeH - tokens.spaceNumber.sizeXxxl,
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
