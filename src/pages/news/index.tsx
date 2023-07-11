import React, { useEffect } from "react"
import * as C from "../../styles/news"

import HeadBanner from "@/components/HeadBanner"
import NewsList from "@/sections/NewsList"
import { useApp } from "@/context/appContext"
import { getNewsList } from "@/utils/getNews"
import ContentBox from "@/components/ContentBox"
import { ClientFeedback, PurposeHome, WhyToChoose } from "@/sections"
import Link from "next/link"

interface Props {
  data: any
}

const News: React.FC<Props> = ({ data }) => {
  const { setNewsList } = useApp()

  useEffect(() => {
    if (!data) return
    setNewsList(data.posts.nodes)
  }, [data])

  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      {!data ? (
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
        <NewsList list={data.posts.nodes} />
      )}
    </C.BlogContainer>
  )
}

export default News

export async function getStaticProps() {
  const data = await getNewsList()

  return {
    props: { data, fallback: true },
  }
}
