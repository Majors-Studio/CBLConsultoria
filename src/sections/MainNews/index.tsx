import { Button, Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import { useDevice } from "@/hooks/useDevice";
import { tokens } from "@/utils/tokens";
import Link from "next/link";
import React, { useEffect } from "react";

import * as C from "./styles";
import { useApp } from "@/context/appContext";
import { getDate } from "@/utils/getDate";
import Loading from "@/components/Loading";
import LoadingIcon from "@/assets/icons/LoadingIcon";
import CtaButton from "@/components/CtaButton";

const MainNews: React.FC = () => {
  const { isMobile } = useDevice();
  const { newsList, getNewsList } = useApp();

  useEffect(() => {
    if (!newsList.length) {
      getNewsList();
    }
  }, [getNewsList, newsList.length]);

  return (
    <ContentBox
      bgColor={tokens.colors.neutral.highPure}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
        gap: isMobile ? tokens.space.sizeXl : "32px",
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
          Os <b>pagamentos</b>, originalmente agendados para serem feitos em SP
          até 2020, foram <b>adiados para 2024</b> e, posteriormente, tiveram
          uma nova prorrogação até 2029.
          <br />
          <br />
          As reportagens destacam os <b>atrasos frequentes</b>, a contínua
          alteração na <b>data final de pagamento</b>, prejudicando assim{" "}
          <b>milhares de credores</b>.
        </Subtitle>
      </div>

      {newsList.length > 0 ? (
        <C.NewsList>
          {newsList ? (
            newsList.slice(0, isMobile ? 2 : 4).map((news, newsIndex) => {
              return (
                <C.NewsItem key={newsIndex}>
                  <C.NewsItemTop>
                    <C.NewsItemInfo>
                      {news.fields.sourceAuthor &&
                        news.fields.sourceAuthor + " | "}
                      {getDate(news.fields.publishedDate)}
                    </C.NewsItemInfo>
                    <C.NewsItemTitle>{news.fields.title}</C.NewsItemTitle>
                  </C.NewsItemTop>
                  <Link
                    href={{
                      pathname: "noticias/post/",
                      query: { id: news.sys.id },
                    }}
                    style={{
                      color: "#e2a141",
                    }}
                  >
                    Leia mais
                  </Link>
                </C.NewsItem>
              );
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
          {isMobile && (
            <Link
              href={{
                pathname: "noticias/",
              }}
              style={{
                color: "#e2a141",
                margin: "0 auto",
              }}
            >
              Ver todas as notícias
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
  );
};

export default MainNews;
