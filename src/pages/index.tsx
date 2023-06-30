import React from "react";
import Head from "next/head";
import * as S from "@/styles/home";
import PurposeForm from "@/components/PurposeForm";
import { ConfirmIcon, DangerIcon, SuccessIcon } from "@/assets/icons";

import CtaButton from "@/components/CtaButton";
import SpeechCarousel from "@/components/SpeechCarousel";
import Accordion from "@/components/Accordion";
import { useHome } from "@/context/homeContext";
import { useApp } from "@/context/appContext";
import Video from "@/components/Video";
import ContentBox from "@/components/ContentBox";
import { tokens } from "@/utils/tokens";
import { Subtitle, Title } from "@/components";
import Description from "@/components/Description";

import { useDevice } from "@/hooks/useDevice";
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, Pagination } from "swiper";

export default function Home() {
  const { userList } = useApp();
  const { isMobile } = useDevice();
  const [visibleItems, setVisibleItems] = React.useState(3);
  const [showMore, setShowMore] = React.useState(false);

  const { infoList, cardList, chooseList, whyList, faqList, blogList } =
    useHome();

  const handleShowMore = () => {
    if (visibleItems < blogList.length) {
      setShowMore(true);
      setVisibleItems(visibleItems + 3);
    } else if (visibleItems === blogList.length) {
      setShowMore(false);
      setVisibleItems(3);
    }
  };

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <S.Container>
        <ContentBox
          style={{
            paddingTop: "80px",
            paddingBottom: "100px",
          }}
        >
          <S.Head>
            <S.Info>
              <Title variant="primary" style={{ textAlign: "left" }}>
                Antecipe seu <strong>precatório</strong> com{" "}
                <strong>Segurança</strong> e <strong>Velocidade</strong>!
              </Title>
              <S.InfoList>
                {infoList.map((item) => (
                  <S.PrecatoryInfoItem key={item.id}>
                    <ConfirmIcon />
                    <Subtitle>{item.title}</Subtitle>
                  </S.PrecatoryInfoItem>
                ))}
              </S.InfoList>
              <CtaButton />
            </S.Info>
            <PurposeForm />
          </S.Head>
        </ContentBox>

        <ContentBox py={"60px"} bgColor={tokens.colors.highlight.dark}>
          <Title
            variant="secondary"
            style={{
              color: tokens.colors.brand.light,
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

        <ContentBox py={"60px"}>
          <Title variant="primary">
            Há mais de uma década no mercado, somos a maior empresa na
            antecipação de precatórios do Brasil
          </Title>

          <Video />

          <CtaButton>Acesse nosso tour virtual!</CtaButton>
        </ContentBox>

        <ContentBox py={"60px"}>
          <Title variant="primary">
            A Harmony é a melhor opção para você que deseja antecipar o seu
            precatório
          </Title>
          <Subtitle style={{ marginTop: "20px" }}>
            Se livre da longa fila de espera do Governo para pagamento de seu
            precatório.
          </Subtitle>

          <S.ChooseList>
            {chooseList.map((item) => (
              <S.ChooseItem key={item.id}>
                <S.ChooseItemTitle>{item.title}</S.ChooseItemTitle>
                <S.ChooseItemList>
                  {item.list.map((listItem) => (
                    <S.ChooseItemListItem key={listItem.id}>
                      <S.ChooseItemListItemStatus>
                        {listItem.status === "danger" ? (
                          <DangerIcon />
                        ) : (
                          <SuccessIcon />
                        )}
                      </S.ChooseItemListItemStatus>

                      <Description>{listItem.text}</Description>
                    </S.ChooseItemListItem>
                  ))}
                </S.ChooseItemList>
              </S.ChooseItem>
            ))}
          </S.ChooseList>
        </ContentBox>

        <ContentBox bgColor={tokens.colors.highlight.dark} py={"60px"}>
          <Title variant="secondary">Porque escolher a Harmony?</Title>

          <S.WhyList>
            {whyList.map((item) => (
              <S.WhyItem key={item.id}>
                <S.WhyItemIcon>{item.icon}</S.WhyItemIcon>

                <S.WhyItemTexts>
                  <Subtitle
                    style={{
                      textAlign: "left",
                    }}
                  >
                    {item.title}
                  </Subtitle>
                  <Description>{item.description}</Description>
                </S.WhyItemTexts>
              </S.WhyItem>
            ))}
          </S.WhyList>
        </ContentBox>

        <S.WhatContainer>
          <Title variant="tertiary">
            O que os clientes dizem sobre a Harmony
          </Title>
          <SpeechCarousel data={userList} />
        </S.WhatContainer>

        <ContentBox py={"60px"}>
          <Title variant="primary">FAQ - Perguntas Frequentes</Title>
          <Subtitle>Dúvidas? Estamos aqui para ajudar.</Subtitle>

          <Accordion data={faqList} />
        </ContentBox>

        <ContentBox bgColor="#fff" py={"60px"}>
          <Title variant="primary">
            Acompanhe as notícias sobre precatórios
          </Title>
          <S.BlogContent>
            {blogList.slice(0, visibleItems).map((item) => (
              <S.BlogItem key={item.id}>
                <S.BlogImageContainer>
                  <S.BlogImage src={item.image} />
                </S.BlogImageContainer>
                <S.BlogTitle>{item.title}</S.BlogTitle>
                <Description
                  style={{
                    margin: "0 30px",
                  }}
                >
                  Consulte mais informações
                </Description>
              </S.BlogItem>
            ))}
          </S.BlogContent>
          <S.ShowMoreButton onClick={() => handleShowMore()}>
            {visibleItems < blogList.length ? "Ver mais" : "Ver menos"}
          </S.ShowMoreButton>
          <CtaButton
            href="/news"
            style={{ padding: "0 20px", marginTop: "32px" }}
          >
            Ver mais notícias
          </CtaButton>
        </ContentBox>
      </S.Container>
    </div>
  );
}
