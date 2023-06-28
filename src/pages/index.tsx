import React from "react"
import Head from "next/head"
import * as S from "@/styles/home"
import PurposeForm from "@/components/PurposeForm"
import { ConfirmIcon, DangerIcon, SuccessIcon } from "@/assets/icons"

import Link from "next/link"
import CtaButton from "@/components/CtaButton"
import SpeechCarousel from "@/components/SpeechCarousel"
import Accordion from "@/components/Accordion"
import { useHome } from "@/context/homeContext"
import { useApp } from "@/context/appContext"
import Video from "@/components/Video"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"

export default function Home() {
  const { userList } = useApp()

  const { infoList, cardList, chooseList, whyList, faqList, blogList } =
    useHome()

  return (
    <div>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        {/* <meta name="robots" content="index, follow" /> */}
        {/* <meta property="og:image" content="/images/og/harmony.png" /> */}
        {/* <link rel="manifest" href="site.webmanifest" /> */}
      </Head>
      <S.Container>
        <ContentBox style={{
          paddingTop: '80px',
          paddingBottom: '100px',
        }}>
          <S.Head>
            <S.Info>
              <S.Title style={{ textAlign: "left" }}>
                Receba seu <strong>precatório</strong> com{" "}
                <strong>agilidade</strong> e <strong>segurança!</strong>
              </S.Title>
              <S.InfoList>
                {infoList.map((item) => (
                  <S.PrecatoryInfoItem key={item.id}>
                    <ConfirmIcon />
                    <span>{item.title}</span>
                  </S.PrecatoryInfoItem>
                ))}
              </S.InfoList>
              <CtaButton />
            </S.Info>
            <PurposeForm />
          </S.Head>
        </ContentBox>

        <ContentBox py={"60px"} bgColor={tokens.colors.highlight.dark}>
          <S.Title
            style={{
              color: tokens.colors.brand.light,
            }}
          >
            Antecipar o <strong>recebimento</strong> do seu precatório é{" "}
            <strong>simples</strong>
          </S.Title>

          <S.Cards>
            {cardList.map((item) => (
              <S.Card key={item.id}>
                <S.CardIcon>{item.icon}</S.CardIcon>
                <div>
                  <S.CardInfoTitle>{item.title}</S.CardInfoTitle>
                  <S.CardInfoDescription>
                    {item.description}
                  </S.CardInfoDescription>
                  <S.CardIndex>{item.id + 1}</S.CardIndex>
                </div>
              </S.Card>
            ))}
          </S.Cards>
        </ContentBox>

        <ContentBox py={"60px"}>
          <S.Title>
            Há mais de uma década no mercado, somos a maior empresa na
            antecipação de precatórios do Brasil
          </S.Title>

          <Video />

          <CtaButton>Acesse nosso tour virtual!</CtaButton>
        </ContentBox>

        <ContentBox py={"60px"}>
          <S.Title>
            A Harmony é a melhor opção para você que deseja antecipar o seu
            precatório
          </S.Title>
          <S.ChooseSubtitle>
            Se livre da longa fila de espera do Governo para pagamento de seu
            precatório.
          </S.ChooseSubtitle>

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

                      <S.ChooseItemListItemText>
                        {listItem.text}
                      </S.ChooseItemListItemText>
                    </S.ChooseItemListItem>
                  ))}
                </S.ChooseItemList>
              </S.ChooseItem>
            ))}
          </S.ChooseList>
        </ContentBox>

        <ContentBox bgColor={tokens.colors.highlight.dark} py={"60px"}>
          <S.Title
            style={{
              color: tokens.colors.brand.light,
            }}
          >
            Porque escolher a Harmony?
          </S.Title>

          <S.WhyList>
            {whyList.map((item) => (
              <S.WhyItem key={item.id}>
                <S.WhyItemIcon>{item.icon}</S.WhyItemIcon>

                <S.WhyItemTexts>
                  <S.WhyItemTitle>{item.title}</S.WhyItemTitle>
                  <S.WhyItemDescription>
                    {item.description}
                  </S.WhyItemDescription>
                </S.WhyItemTexts>
              </S.WhyItem>
            ))}
          </S.WhyList>
        </ContentBox>

        <S.WhatContainer>
          <S.Title style={{ color: tokens.colors.brand.dark }}>
            O que os clientes dizem sobre a Harmony
          </S.Title>
          <SpeechCarousel data={userList} />
        </S.WhatContainer>

        <ContentBox py={"60px"}>
          <S.Title>FAQ - Perguntas Frequentes</S.Title>
          <S.FaqDescription>
            Dúvidas? Estamos aqui para ajudar.
          </S.FaqDescription>

          <Accordion data={faqList} />
        </ContentBox>

        <ContentBox bgColor="#fff" py={"60px"}>
          <S.Title>Acompanhe as notícias sobre precatórios</S.Title>
          <S.BlogContent>
            {blogList.map((item) => (
              <S.BlogItem key={item.id}>
                <S.BlogImageContainer>
                  <S.BlogImage src={item.image} />
                </S.BlogImageContainer>
                <S.BlogTitle>{item.title}</S.BlogTitle>
                <S.BlogLink>Consulte mais informações</S.BlogLink>
              </S.BlogItem>
            ))}
          </S.BlogContent>
          <CtaButton
            href="/news"
            style={{ padding: "0 20px", marginTop: "32px" }}
          >
            Ver mais notícias
          </CtaButton>
        </ContentBox>
      </S.Container>
    </div>
  )
}
