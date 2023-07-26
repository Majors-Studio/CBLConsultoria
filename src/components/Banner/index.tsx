import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/autoplay";

import ArrowDownIcon from "@/assets/icons/ArrowDownIcon";

import * as S from "./styles";
import { useApp } from "@/context/appContext";
import { Autoplay } from "swiper";
import { bannerList } from "@/utils/dataObjects";
import { tokens } from "@/utils/tokens";
import Title from "../Title";
import Logo from "../Logo";
import { useDevice } from "@/hooks/useDevice";

const Banner: React.FC = () => {
  const { isTop, screenSizeH, screenSizeW } = useApp();
  const { isDesktop, isMobile } = useDevice();

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
                  top: index === 0 && isDesktop ? "30%" : "50%",
                  left: index === 0 && isDesktop ? "55%" : "50%",
                  transform:
                    index !== 0
                      ? "translate(-50%, -50%)"
                      : isMobile
                      ? "translate(-50%, -50%)"
                      : undefined,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                {index === 0 && <Logo size="large" />}
                <Title
                  variant={index === 2 ? "tertiary" : "secondary"}
                  style={{ fontWeight: 600 }}
                >
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
                  objectPosition: index !== 0 ? "0% 30%" : "top",
                  zIndex: -1,
                  height: "100%",
                }}
              />
            </SwiperSlide>
          );
        })}
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
