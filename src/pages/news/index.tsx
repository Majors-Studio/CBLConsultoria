import React, { useEffect } from "react"
import * as C from "../../styles/news"

import HeadBanner from "@/components/HeadBanner"
import NewsList from "@/sections/NewsList"
import { useApp } from "@/context/appContext"
import ContentBox from "@/components/ContentBox"
import Link from "next/link"
import { createClient } from "contentful"

interface Props {
  news: any
}

const News: React.FC<Props> = ({ news }) => {
  const { setNewsList } = useApp()
  
  useEffect(() => {
    if (!news) return
    setNewsList(news)
    console.log(news)
  }, [news])

  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      {!news ? (
        <>
          <ContentBox
            bgColor="#fff"
            py="60px"
            style={{
              width: "100%",
            }}
            contentStyle={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <C.Title>Não encontramos nenhuma notícia</C.Title>

            <Link href="/">
              <C.Button>Voltar para a página inicial</C.Button>
            </Link>
          </ContentBox>
        </>
      ) : (
        <NewsList />
      )}
    </C.BlogContainer>
  )
}

export default News

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });
  
  const res = await client.getEntries({ content_type: "newsArticle" });
  

  return {
    props: { fallback: true, news: res.items },
    revalidate: 1,
  }
}
