import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import Link from "next/link"
import React, { useState } from "react"

import * as C from "./styles"
import { newsList } from "@/utils/dataObjects"

const MainNews: React.FC = () => {
  const { isMobile } = useDevice()

  const [maxMobileItems] = useState(2)

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
        {newsList.slice(0, isMobile ? 2 : 4).map((news, newsIndex) => (
          <C.NewsItem key={newsIndex}>
            <C.NewsItemTop>
              <C.NewsItemInfo>
                {news.source} | {news.date.toString()}
              </C.NewsItemInfo>
              <C.NewsItemTitle>{news.title}</C.NewsItemTitle>
            </C.NewsItemTop>
            <Link
              href={{
                pathname: "news/" + news.title,
                query: { id: newsIndex },
              }}
              style={{
                color: "#e2a141",
              }}
            >
              Leia mais
            </Link>
          </C.NewsItem>
        ))}
        {isMobile && (
          <Link
            href={{
              pathname: "news/",
            }}
            style={{
              color: "#e2a141",
              margin: '0 auto'
            }}
          >
            Ver todas as notícias
          </Link>
        )}
      </C.NewsList>
    </ContentBox>
  )
}

export default MainNews
