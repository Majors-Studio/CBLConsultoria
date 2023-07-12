import React, { useEffect } from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { getDate } from "@/utils/getDate"
import { useApp } from "@/context/appContext"
import { getMarkdown } from "@/utils/getMarkdown"

const Page: React.FC<any> = () => {
  const { newsList, getNewsList } = useApp()
  const router = useRouter()
  const {
    query: { id },
  } = router

  useEffect(() => {
    if (newsList.length > 0) return
    getNewsList()
  }, [])

  if (!newsList.length)
    return (
      <S.Container>
        <S.Content>Carregando...</S.Content>
      </S.Container>
    )

  const news = newsList.find((item: any) => item.sys.id === id)

  if (!id || !news)
    return (
      <S.Container>
        <S.Content>Notícia não encontrada!</S.Content>
      </S.Container>
    )

  const { title, publishedDate, featuredImage, content, author } = news.fields

  const {
    
    fields: {
      title: featuredTitle,
      file: { url: featuredUrl },
    },
  } = featuredImage || { fields: { title: "", file: { url: "" } } }

  const titleText = title?.toString() || ""

  const cont = content?.content as any[]

  const excerpt = cont
    .map((item: any) => getMarkdown(item.content, item.nodeType))
    .join(" ")

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          {">"}
          <Link href="/news">Notícias</Link>
          {"> "}
          {titleText.length > 30 ? titleText.slice(0, 30) + "..." : titleText}
        </S.Tab>
      </S.Content>
      <S.Content
        style={{
          flexDirection: "column",
          marginTop: 24,
        }}
      >
        {featuredImage ? (
          <S.Image src={featuredUrl} alt={featuredTitle?.toString()} />
        ) : (
          <S.NoImage>Imagem não encontrada</S.NoImage>
        )}
        <S.Category>Notícia</S.Category>
        <S.Title>{title?.toString()}</S.Title>
        <S.Description>
          Por <span>{!!author ? author.toString() : "Desconhecido"}</span>
          {" | "}
          <span>{getDate(publishedDate?.toString() || "")}</span>
        </S.Description>
        <S.Text dangerouslySetInnerHTML={{ __html: excerpt }} style={{
          
        
        }} />
      </S.Content>
    </S.Container>
  )
}

export default Page
