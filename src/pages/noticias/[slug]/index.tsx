import React, { useEffect } from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { getDate } from "@/utils/getDate"
import { useApp } from "@/context/appContext"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer"
import ArrowRight from "@/assets/icons/ArrowRightIcon"

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

  const titleText = title?.toString() || ""

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.HR]: (node, children) => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <img src={node.data.target.fields.file.url} />
      ),
      [BLOCKS.EMBEDDED_ENTRY]: (node, children) => <div>{children}</div>,
    },
  }

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          <ArrowRight style={{ width: "22px", height: "12px" }} />
          <Link href="/noticias">Notícias</Link>
          <ArrowRight style={{ width: "22px", height: "12px" }} />
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
          <S.Image
            src={featuredImage?.fields.file.url}
            alt={featuredImage.fields.title?.toString()}
          />
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
        <S.ContentText>
          {documentToReactComponents(content, options)}
        </S.ContentText>
      </S.Content>
    </S.Container>
  )
}

export default Page
