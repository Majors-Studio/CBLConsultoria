import React, { useEffect } from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { getDate } from "@/utils/getDate"
import { useApp } from "@/context/appContext"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import ArrowRight from "@/assets/icons/ArrowRightIcon"
import Loading from "@/components/Loading"
import { markdownOptions } from "@/utils/markdownOptions"
import { useDevice } from "@/hooks/useDevice"

const Page: React.FC<any> = () => {
  const { isMobile } = useDevice()
  const { newsList, getNewsList } = useApp()
  const router = useRouter()
  const {
    query: { id },
  } = router

  if (!id) router.push("/")

  useEffect(() => {
    getNewsList()
  }, [])

  if (!newsList.length) return <Loading />

  const news = newsList.find((item: any) => item.sys.id === id)

  if (!news)
    return (
      <S.Container>
        <S.Content>Notícia não encontrada!</S.Content>
      </S.Container>
    )

  const { title, publishedDate, featuredImage, content, author } = news.fields

  const titleText = title
    ? title.length > 30
      ? title.slice(0, isMobile ? 15 : 30) + "..."
      : title?.toString()
    : "Título não encontrado"
  const dateText = getDate(publishedDate?.toString() || "")
  const authorText = author?.toString() || "Desconhecido"

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          <ArrowRight style={{ width: "22px", height: "12px" }} />
          <Link href="/noticias">Notícias</Link>
          <ArrowRight style={{ width: "22px", height: "12px" }} />
          {titleText}
        </S.Tab>
      </S.Content>
      <S.Content
        style={{
          flexDirection: "column",
          marginTop: 24,
        }}
      >
        {featuredImage ? (
          <S.BannerImage
            src={featuredImage?.fields.file.url}
            alt={featuredImage.fields.title?.toString()}
          />
        ) : (
          <S.NoImage>Imagem não encontrada</S.NoImage>
        )}
        <S.Category>Notícia</S.Category>
        <S.Title>{titleText}</S.Title>
        <S.Description>
          Por {authorText}
          {dateText ? " | " + dateText : ""}
        </S.Description>
        {documentToReactComponents(content, markdownOptions)}
      </S.Content>
    </S.Container>
  )
}

export default Page
