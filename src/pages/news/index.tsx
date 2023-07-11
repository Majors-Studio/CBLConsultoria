import React, { useEffect } from "react"
import * as C from "../../styles/blog"

import HeadBanner from "@/components/HeadBanner"
import NewsList from "@/sections/NewsList"
import { useApp } from "@/context/appContext"
import { getNewsList } from "@/utils/getNews"
import ContentBox from "@/components/ContentBox"

interface Props {
  data: any
}


const News: React.FC<Props> = ({ data }) => {
  const { setNewsList } = useApp()
  
  useEffect(() => {
    if(!data) return
    setNewsList(data.posts.nodes)
  }, [data])
  
  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      {!data ? (
          <ContentBox bgColor="#fff">Carregando...</ContentBox>
      ): (
        <NewsList list={data?.posts.nodes} />
      )}
    </C.BlogContainer>
  )
}

export default News

export async function getStaticProps() {
  const data = await getNewsList()
  
  return {
    props: { data,fallback: true, },
  }
}
