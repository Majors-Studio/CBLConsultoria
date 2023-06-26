import React from "react"

import { useRouter } from "next/router"
import { useApp } from "@/context/contextApi"
import Image from "next/image"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { useDevice } from "@/hooks/useDevice"

const Page: React.FC = () => {
  const { isMobile } = useDevice()
  const { newsList } = useApp()
  const router = useRouter()
  const {
    query: { slug, id },
  } = router

  if (!id) return <p>Notícia não encontrada!</p>

  const post = newsList[+id]

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          {">"}
          <Link href="/news">News</Link>
          {">"}
          <Link href={"/news/" + post.title}>
            {post.title.length > 30
              ? post.title.slice(0, 30) + "..."
              : post.title}
          </Link>
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
            <S.Image src={post.image} alt={post.title} />
            <S.Category>Notícia</S.Category>
            <S.Title>{post.title}</S.Title>
            <S.Description>
              Por <span>{post.author}</span>{" | "}
              <span>{post.date.toLocaleDateString()}</span>
            </S.Description>
            <S.Text dangerouslySetInnerHTML={{__html: post.text}} />
          </S.Right>
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}

export default Page
