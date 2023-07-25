import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

import { Autoplay, Pagination } from "swiper"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import ContentBox from "@/components/ContentBox"
import { Subtitle, Title } from "@/components"
import Description from "@/components/Description"

import * as S from "./styles"
import { cardList } from "@/utils/dataObjects"

const CardSteps: React.FC = () => {
  const { isMobile } = useDevice()

  return (
    <ContentBox bgColor={tokens.colors.highlight.dark}>
      <Title
        variant="secondary"
        style={{
          color: tokens.colors.neutral.highPure,
        }}
      >
        <span>Agora</span> se tornou mais{" "}
        <span>prático e seguro antecipar</span> seu precatório
      </Title>

      {isMobile ? (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          modules={[Pagination, Autoplay]}
          navigation={false}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
        >
          {cardList.map((item) => (
            <SwiperSlide key={item.id}>
              <S.Card style={{ marginTop: "20px" }}>
                <S.CardIcon>{item.icon}</S.CardIcon>
                <div>
                  <Subtitle
                    style={{
                      margin: "36px 0 30px",
                    }}
                  >
                    {item.title}
                  </Subtitle>
                  <Description
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </Description>
                  <S.CardIndex>{item.id + 1}</S.CardIndex>
                </div>
              </S.Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <>
          <S.Cards>
            {cardList.map((item) => (
              <S.Card key={item.id}>
                <S.CardIcon>{item.icon}</S.CardIcon>
                <div>
                  <Subtitle
                    style={{
                      margin: "36px 0 30px",
                    }}
                  >
                    {item.title}
                  </Subtitle>
                  <Description
                    style={{
                      textAlign: "center",
                    }}
                  >
                    {item.description}
                  </Description>
                  <S.CardIndex>{item.id + 1}</S.CardIndex>
                </div>
              </S.Card>
            ))}
          </S.Cards>
        </>
      )}
    </ContentBox>
  )
}

export default CardSteps
