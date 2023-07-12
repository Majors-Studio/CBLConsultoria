import React from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { getDate } from "@/utils/getDate"
import { createClient } from "contentful"

const Page: React.FC<any> = ({ news }) => {
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

  const { title, publishedDate, featuredImage, content, author } = post.fields

  const {
    fields: {
      title: featuredTitle,
      file: { url: featuredUrl },
    },
  } = featuredImage

  const titleText = title?.toString() || ""

  const cont = content?.content as any[]

  const excerpt = cont.find((item: any) => item.nodeType === "paragraph")
    ?.content[0].value

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
        <S.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
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
