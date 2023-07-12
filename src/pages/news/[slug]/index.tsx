import React, { useEffect } from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { useDevice } from "@/hooks/useDevice"
import { getDate } from "@/utils/getDate"
import { createClient } from "contentful"
import { InferGetStaticPropsType } from "next"

const Page: React.FC<InferGetStaticPropsType<typeof getStaticProps>> = ({
  news,
}) => {
  const { isMobile } = useDevice()
  const router = useRouter()
  const {
    query: { id },
  } = router

  const post = news.find((post: any) => post.sys.id === id)

  if (!id || !post)
    return (
      <S.Container>
        <S.Content>Notícia não encontrada!</S.Content>
      </S.Container>
    )

  console.log(post)

  const { title, publishedDate, featuredImage,content,author } = post.fields

  
  // find param "value" in content object
  const excerpt = content?.content.find((item: any) => item.nodeType === "paragraph")?.content[0].value
  
  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          {">"}
          <Link href="/news">Notícias</Link>
          {"> "}
          {title.length > 30 ? title.slice(0, 30) + "..." : title}
        </S.Tab>
      </S.Content>
      <S.Content
        style={{
          flexDirection: "row",
        }}
      >
        <S.Grid>
          {isMobile || <S.Left></S.Left>}
          <S.Right>
            {featuredImage ? (
              <S.Image src={featuredImage?.fields.file.url} alt={title?.toString()} />
            ) : (
              <S.NoImage>Imagem não encontrada</S.NoImage>
            )}
            <S.Category>Notícia</S.Category>
            <S.Title>{title?.toString()}</S.Title>
            <S.Description>
              Por <span>{!!author ? author.toString() : "Desconhecido"}</span>
              {" | "}
              <span>{getDate(publishedDate?.toString() || '')}</span>
            </S.Description>
            <S.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
          </S.Right>
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}

export default Page

export const getStaticPaths = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  })

  const res = await client.getEntries({ content_type: "newsArticle" })

  const paths = res.items.map((item) => ({
    params: { slug: item.fields.title, props: { news: res.items } },
  }))

  return { paths, fallback: false }
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  })

  const res = await client.getEntries({ content_type: "newsArticle" })

  return {
    props: { news: res.items },
  }
}
