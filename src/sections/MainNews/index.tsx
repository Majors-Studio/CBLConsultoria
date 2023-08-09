import { Button, Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import Link from "next/link"
import React, { useEffect } from "react"

import * as C from "./styles"
import { useApp } from "@/context/appContext"
import { getDate } from "@/utils/getDate"
import Loading from "@/components/Loading"
import LoadingIcon from "@/assets/icons/LoadingIcon"
import CtaButton from "@/components/CtaButton"
import Description from "@/components/Description"

const MainNews: React.FC = () => {
  const { isDesktop } = useDevice()
  const { newsList, getNewsList } = useApp()

  useEffect(() => {
    if (!newsList.length) {
      getNewsList()
    }
  }, [getNewsList, newsList.length])

  return (
    <ContentBox
      bgColor={tokens.colors.neutral.highPure}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: !isDesktop ? "1fr" : "1fr 2fr",
        gap: !isDesktop ? tokens.space.sizeXl : "32px",
      }}
    >
      <div>
        <Title
          variant="primary"
          style={{
            textAlign: "left",
            marginBottom: 32,
          }}
        >
          Notícias
        </Title>

        <Subtitle
          style={{
            textAlign: "left",
            lineHeight: "32px",
            color: tokens.colors.brand.cta,
          }}
        >
          Confira a seguir as informações divulgadas pelos{" "}
          <b>principais canais de mídia</b> (Folha de São Paulo, Estadão, Valor
          Investe, Gazeta, entre outros) e artigos provenientes dos{" "}
          <b>grandes escritórios de advocacia</b>.
          <br />
          <br />
          As reportagens destacam as <b>dificuldades</b> de milhares de pessoas
          dentro do <b>território judicial</b>, novidades e atrasos de
          pagamentos da justiça.
        </Subtitle>
      </div>

      {newsList.length > 0 ? (
        <C.NewsList>
          {newsList ? (
            newsList.slice(0, !isDesktop ? 2 : 4).map((news, newsIndex) => {
              return (
                <C.NewsItem key={newsIndex}>
                  <Description
                    style={{
                      textDecoration: "underline",
                      color: tokens.colors.brand.cta,
                    }}
                  >
                    {news.fields.sourceAuthor &&
                      news.fields.sourceAuthor + " | "}
                    {getDate(news.fields.publishedDate)}
                  </Description>
                  <Subtitle
                    style={{
                      color: tokens.colors.brand.dark,
                      textAlign: "left",
                    }}
                  >
                    {news.fields.title}
                  </Subtitle>
                  <Link
                    href={{
                      pathname: "noticias/post/",
                      query: { id: news.sys.id },
                    }}
                  >
                    <Description
                      style={{
                        color: "#e2a141",
                      }}
                    >
                      Leia mais
                    </Description>
                  </Link>
                </C.NewsItem>
              )
            })
          ) : (
            <>
              <style>
                {`
              @keyframes rotate {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
              </style>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    transform: "rotate(0deg)",
                    animation: "rotate 0.8s infinite",
                    color: tokens.colors.brand.dark,
                  }}
                >
                  <LoadingIcon />
                </div>
                <p>Carregando Notícias</p>
              </div>
            </>
          )}
          {!isDesktop && (
            <Link
              href={{
                pathname: "noticias/",
              }}
              style={{
                margin: "0 auto",
              }}
            >
              <Description
                style={{
                  color: "#e2a141",
                }}
              >
                Ver todas as notícias
              </Description>
            </Link>
          )}
        </C.NewsList>
      ) : (
        <C.NewsList
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Title>Não foram encontradas notícias no momento</Title>
          <CtaButton href="#purposeForm" />
        </C.NewsList>
      )}
    </ContentBox>
  )
}

export default MainNews
