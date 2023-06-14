import React, { useState } from "react"
import Head from "next/head"
import * as S from "@/styles/home"
import PurposeForm from "@/components/PurposeForm"
import SpeechBox from "@/components/SpeechBox"
import {
  ConfirmIcon,
  DangerIcon,
  ListIcon,
  MagnifyingIcon,
  MoneyIcon,
  NewsIcon,
  SuccessIcon,
} from "@/assets/icons"

import { Swiper, SwiperSlide } from "swiper/react"
import SwiperCore, { A11y, Autoplay } from "swiper"

SwiperCore.use([A11y, Autoplay])

import "swiper/swiper-bundle.min.css"
import "swiper/swiper.min.css"

import Avatar from "@/components/Avatar"
import TriangleDownIcon from "@/assets/icons/TriangleDownIcon"

export default function Home() {
  const [faqOpened, setFaqOpened] = useState<number | null>(null)

  const infoList = [
    {
      id: 0,
      title: "Recebimento à vista;",
    },
    {
      id: 1,
      title: "+1 bilhão em precatórios negociados;",
    },
    {
      id: 2,
      title: "+7.000 cessões realizadas em todo Brasil;",
    },
    {
      id: 3,
      title: "+13 anos no mercado de precatórios.",
    },
  ]

  const cardList = [
    {
      id: 0,
      title: "Análise",
      description:
        "Nossos advogados analisam detalhadamente o processo judicial do seu precatório de forma rápida e segura",
      icon: <MagnifyingIcon />,
    },
    {
      id: 1,
      title: "Proposta",
      description:
        "Enviamos a melhor proposta do mercado e esclarecemos todas as suas dúvidas com transparência e segurança",
      icon: <NewsIcon />,
    },
    {
      id: 2,
      title: "Formalização",
      description:
        "Análise da documentação e agendamento da cessão no cartório mais próximo de você, te acompanharemos presencialmente",
      icon: <ListIcon />,
    },
    {
      id: 3,
      title: "Recebimento",
      description:
        "Contrato assinado e o dinheiro na sua conta, você recebe à vista e sem burocracia",
      icon: <MoneyIcon />,
    },
  ]

  const chooseList = [
    {
      id: 0,
      title: "Esperar o Governo pagar o precatório",
      list: [
        {
          id: 0,
          text: "Demora de anos para receber;",
          status: "danger",
        },
        {
          id: 1,
          text: "Aguardar uma fila de espera enorme;",
          status: "danger",
        },
        {
          id: 2,
          text: "Estresse, raiva e preocupação;",
          status: "danger",
        },
        {
          id: 3,
          text: "Notícias de calote e parcelamento",
          status: "danger",
        },
      ],
    },
    {
      id: 1,
      title: "Antecipar o recebimento do precatório",
      list: [
        {
          id: 0,
          text: "Pagamento à vista na sua conta bancária;",
          status: "success",
        },
        {
          id: 1,
          text: "Agilidade e segurança jurídica;",
          status: "success",
        },
        {
          id: 2,
          text: "Ajuda na realização de sonhos;",
          status: "success",
        },
        {
          id: 3,
          text: "Liberdade para usufruir do seu dinheiro",
          status: "success",
        },
      ],
    },
  ]

  const whyList = [
    {
      id: 0,
      title: "Atendimento Personalizado",
      description:
        "Nós cuidamos para que o processo de negociação seja 100% seguro e transparente, desde a análise até o recebimento do seu precatório.",
      icon: <></>,
    },
    {
      id: 1,
      title: "1 bilhão em precatórios negociados",
      description:
        "Ao longo da nossa história, foram mais de 7 mil credores satisfeitos com a antecipação de seus precatórios",
      icon: <></>,
    },
    {
      id: 2,
      title: "Total segurança na negociação",
      description:
        "Empresa consolidada, com mais de uma década no mercado de precatórios.",
      icon: <></>,
    },
    {
      id: 3,
      title: "Pagamento à vista",
      description:
        "O pagamento da antecipação do seu precatório é feito à vista, no ato da formalização em cartório de notas da sua cidade.",
      icon: <></>,
    },
  ]

  const whatList = [
    {
      id: 0,
      name: "João da Silva",
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
    {
      id: 1,
      name: "João da Silva 2",
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
    {
      id: 2,
      name: "João da Silva 3",
      city: "Belo horizonte",
      state: "MG",
      country: "Brasil",
      text: "“A Harmony me ajudou a realizar o sonho de comprar a minha casa própria. Foi tudo muito rápido e seguro, recomendo!”",
      avatar: "",
    },
  ]

  const faqList = [
    {
      id: 0,
      title: "Como funciona a antecipação de precatórios?",
      description:
        "A antecipação de precatórios é uma operação financeira que consiste na compra de precatórios federais, estaduais e municipais. A Harmony realiza a compra do seu precatório e você recebe o valor à vista, sem burocracia e sem esperar anos para receber do Governo.",
    },
    {
      id: 1,
      title: "Quais são os tipos de precatórios?",
      description:
        "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
    },
    {
      id: 2,
      title: "Quais são os tipos de precatórios?",
      description:
        "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
    },
    {
      id: 3,
      title: "Quais são os tipos de precatórios?",
      description:
        "Precatórios Federais: são os precatórios emitidos pela União, autarquias e fundações públicas federais. Precatórios Estaduais: são os precatórios emitidos pelos Estados e Distrito Federal. Precatórios Municipais: são os precatórios emitidos pelos Municípios.",
    },
  ]

  const blogList = [
    {
      id: 0,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1549923746-c502d488b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    },
    {
      id: 1,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1562564055-71e051d33c19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      id: 2,
      title: "Como funciona a antecipação de precatórios?",
      image:
        "https://images.unsplash.com/photo-1544725121-be3bf52e2dc8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1467&q=80",
    },
  ]

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
                Receba seu precatório com agilidade e segurança!
              </S.InfoTitle>
              <S.InfoList>
                {infoList.map((item) => (
                  <S.PrecatoryInfoItem key={item.id}>
                    <ConfirmIcon />
                    <span>{item.title}</span>
                  </S.PrecatoryInfoItem>
                ))}
              </S.InfoList>
              <S.CtaButton>Quero antecipar </S.CtaButton>
            </S.Info>
            <S.PurposeContainer>
              <PurposeForm />
            </S.PurposeContainer>
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

            <S.VideoContainer>
              <S.VideoTitle>
                Há mais de uma década no mercado, somos a maior empresa na
                antecipação de precatórios do Brasil
              </S.VideoTitle>

              <S.VideoWrapper>
                <iframe
                  style={{ marginBottom: "20px", marginTop: "20px" }}
                  allowFullScreen
                  uk-video="automute: true"
                  width="100%"
                  height="600px"
                  src={`https://www.youtube.com/embed/aqz-KE-bpKQ?autoplay=0&controls=0&rel=1`}
                ></iframe>
              </S.VideoWrapper>

              <S.VideoCta>Acesse nosso tour virtual!</S.VideoCta>
            </S.VideoContainer>
          </S.CardContainer>

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

          <S.WhatList>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              modules={[Autoplay, A11y]}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
            >
              {whatList.map((item) => (
                <SwiperSlide>
                  <S.WhatItem>
                    <SpeechBox text="TESTEEE!" />
                    <S.WhatTexts>
                      <Avatar src={item.avatar} size="large" />
                      <S.WhatName>{item.name}</S.WhatName>
                      <S.WhatPlace>
                        {item.city}, {item.state} - {item.country}
                      </S.WhatPlace>
                    </S.WhatTexts>
                  </S.WhatItem>
                </SwiperSlide>
              ))}
            </Swiper>
          </S.WhatList>
        </S.WhatContainer>

        <S.Content>
          <S.FaqContainer>
            <S.FaqTitle>FAQ - Perguntas Frequentes</S.FaqTitle>
            <S.FaqDescription>
              Dúvidas? Estamos aqui para ajudar.
            </S.FaqDescription>

            <S.FaqList>
              {faqList.map((item, index) => (
                <S.FaqItem
                  key={item.id}
                  onClick={() => {
                    if (faqOpened === index) return setFaqOpened(null)

                    setFaqOpened(index)
                  }}
                  ref={(el) => {
                    if (el && faqOpened === index) {
                      el.style.maxHeight = `${el.scrollHeight}px`
                    } else if (el) {
                      el.style.maxHeight = `84px`
                    } else {
                      return
                    }
                  }}
                >
                  <S.FaqItemHeader>
                    <S.FaqItemTitle>{item.title}</S.FaqItemTitle>
                    <S.FaqItemIcon
                      style={{
                        transform: faqOpened === index ? "rotate(180deg)" : "",
                        transition: "transform 0.4s ease-in-out",
                      }}
                    >
                      <TriangleDownIcon />
                    </S.FaqItemIcon>
                  </S.FaqItemHeader>
                  <S.FaqItemDescription>
                    {item.description}
                  </S.FaqItemDescription>
                </S.FaqItem>
              ))}
            </S.FaqList>
          </S.FaqContainer>
        </S.Content>

        <S.FollowContainer>
          <S.FollowTitle>Acompanhe as notícias sobre precatórios</S.FollowTitle>
        </S.FollowContainer>

        <S.Content>
          <S.BlogContainer>
            {blogList.map((item) => (
              <S.BlogItem key={item.id}>
                <S.BlogImageContainer>
                  <S.BlogImage src={item.image} />
                </S.BlogImageContainer>
                <S.BlogTitle>{item.title}</S.BlogTitle>
                <S.BlogLink>Consulte mais informações</S.BlogLink>
              </S.BlogItem>
            ))}
          </S.BlogContainer>
          <S.BlogCta>Ver mais notícias</S.BlogCta>
        </S.Content>
      </S.Container>
    </div>
  )
}
