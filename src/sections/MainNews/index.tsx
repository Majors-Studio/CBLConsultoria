import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { useApp } from "@/context/appContext"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import Link from "next/link"
import React from "react"

import * as C from "./styles"

const MainNews: React.FC = () => {
    const { isMobile } = useDevice()
  const {  newsList } = useApp();
    
  return (
    <ContentBox
      py={"60px"}
      bgColor={tokens.colors.brand.light}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
        gap: isMobile ? "60px" : "32px",
      }}
    >
      <div>
        <Title
          variant="tertiary"
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
          }}
        >
          Veja a seguir as notícias nos principais veículos da mídia (Folha de
          São Paulo, Estadão, Valor Investe, Gazeta, entre outros) e matérias
          dos maiores escritórios de advocacia.
          <br />
          <br />
          Os <strong>pagamentos</strong> que inicialmente deveriam ser
          realizados <strong>em SP até 2020</strong>, foram postergados para{" "}
          <strong>2024</strong> e novamente prorrogados para
          <strong>2029</strong>.
          <br />
          <br />
          As notícias abordam justamente os atrasos, a mudança constante na data
          limite de pagamento e a <strong>incerteza</strong> no{" "}
          <strong>recebimento</strong> dos precatórios, que vem{" "}
          <strong>prejudicando milhares de credores</strong>.
        </Subtitle>
      </div>

      <C.NewsList>
        {newsList.map((news, newsIndex) => (
          <Link
            key={news.id}
            href={{
              pathname: "news/" + news.title,
              query: { id: newsIndex },
            }}
          >
            <C.NewsItem key={news.id}>
              <C.NewsItemTop>
                <C.NewsItemInfo>
                  {news.source} | {news.date.toString()}
                </C.NewsItemInfo>
                <C.NewsItemTitle>{news.title}</C.NewsItemTitle>
              </C.NewsItemTop>
              <C.NewsItemLink href={news.link} target="_blank">
                Leia mais
              </C.NewsItemLink>
            </C.NewsItem>
          </Link>
        ))}
      </C.NewsList>
    </ContentBox>
  )
}

export default MainNews
