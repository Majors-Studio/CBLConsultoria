import Head from "next/head"

import * as S from "@/styles/home"
import PurposeForm from "@/components/PurposeForm"
import ConfirmIcon from "@/assets/icons/ConfirmIcon"
import MagnifyingGlass from "@/assets/icons/MagnifyingIcon"
import NewsIcon from "@/assets/icons/NewsIcon"
import ListIcon from "@/assets/icons/ListIcon"
import MoneyIcon from "@/assets/icons/MoneyIcon"
import DangerIcon from "@/assets/icons/DangerIcon"
import SuccessIcon from "@/assets/icons/SucessIcon"

export default function Home() {
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
      icon: <MagnifyingGlass />,
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
                <iframe />
              </S.VideoWrapper>

              <S.VideoCta>Acesse nosso tour virtual!</S.VideoCta>
            </S.VideoContainer>
          </S.CardContainer>

          <S.ChooseContainer>
            <S.ChooseTitle>
              Por que escolher a <span>Harmony</span>?
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
      </S.Container>
    </div>
  )
}
