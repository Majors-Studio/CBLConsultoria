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
        <S.Content>
          <S.Head>
            <S.Info>
              <S.InfoTitle>
                Receba seu <strong>precatório</strong> com{" "}
                <strong>agilidade</strong> e <strong>segurança!</strong>
              </S.InfoTitle>
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

          <S.CardContainer>
            <S.CardTitle>
              Antecipar o <span>recebimento</span> do seu precatório é{" "}
              <span>simples</span>
            </S.CardTitle>

            <S.Cards>
              {cardList.map((item) => (
                <S.Card key={item.id}>
                  <S.CardIcon>{item.icon}</S.CardIcon>
                  <S.CardInfo>
                    <S.CardInfoTitle>{item.title}</S.CardInfoTitle>
                    <S.CardInfoDescription>
                      {item.description}
                    </S.CardInfoDescription>
                    <S.CardIndex>{item.id + 1}</S.CardIndex>
                  </S.CardInfo>
                </S.Card>
              ))}
            </S.Cards>
          </S.CardContainer>

          <S.VideoContainer>
            <S.VideoTitle>
              Há mais de uma década no mercado, somos a maior empresa na
              antecipação de precatórios do Brasil
            </S.VideoTitle>

            <Video />

            <CtaButton>Acesse nosso tour virtual!</CtaButton>
          </S.VideoContainer>

          <S.ChooseContainer>
            <S.ChooseTitle>
              A Harmony é a melhor opção para você que deseja antecipar o seu
              precatório
            </S.ChooseTitle>
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
          </S.ChooseContainer>
        </S.Content>

        <S.WhyContainer>
          <S.WhyTitle>Porque escolher a Harmony?</S.WhyTitle>

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
        </S.WhyContainer>

        <S.WhatContainer>
          <S.WhatTitle>O que os clientes dizem sobre a Harmony</S.WhatTitle>
          <SpeechCarousel data={userList} />
        </S.WhatContainer>

        <S.Content>
          <S.FaqContainer>
            <S.FaqTitle>FAQ - Perguntas Frequentes</S.FaqTitle>
            <S.FaqDescription>
              Dúvidas? Estamos aqui para ajudar.
            </S.FaqDescription>

            <Accordion data={faqList} />
          </S.FaqContainer>
        </S.Content>

        <S.FollowTitle>Acompanhe as notícias sobre precatórios</S.FollowTitle>
        <S.BlogContainer>
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
          <CtaButton href="/news" style={{ padding: "0 20px", marginTop: '32px' }}>
            Ver mais notícias
          </CtaButton>
        </S.BlogContainer>
      </S.Container>
    </div>
  )
}
