import React from "react"

import { useRouter } from "next/router"

import * as S from "@/styles/news_slug"
import Link from "next/link"
import { useDevice } from "@/hooks/useDevice"

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client"
import { useApp } from "@/context/appContext"
import { getNewsList } from "@/utils/getNews"
import { getDate } from "@/utils/getDate"

interface Props {
  paths: any
}
const Page: React.FC<Props> = ({ paths }) => {
  const { isMobile } = useDevice()
  const router = useRouter()
  const {
    query: { id },
  } = router

  const posts = paths.posts.nodes

  if (!id || !posts)
    return (
      <S.Container>
        <S.Content>Notícia não encontrada!</S.Content>
      </S.Container>
    )

  const post = posts.find((post: any) => post.id === id)

  const { title, date, author, excerpt, slug, featuredImage } = post

  return (
    <S.Container>
      <S.Content>
        <S.Tab>
          <Link href="/">Home</Link>
          {">"}
          <Link href="/news">News</Link>
          {">"}
          <Link href={"/news/" + slug}>
            {slug.length > 30 ? slug.slice(0, 30) + "..." : slug}
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
            {featuredImage ? (
              <S.Image src={featuredImage?.node.sourceUrl} alt={slug} />
            ) : (
              <S.NoImage>Imagem não encontrada</S.NoImage>
            )}
            <S.Category>Notícia</S.Category>
            <S.Title>{title}</S.Title>
            <S.Description>
              Por <span>{author ? author : "Desconhecido"}</span>
              {" | "}
              <span>{getDate(date)}</span>
            </S.Description>
            <S.Text dangerouslySetInnerHTML={{ __html: excerpt }} />
          </S.Right>
        </S.Grid>
      </S.Content>
    </S.Container>
  )
}

export default Page

export async function getStaticPaths() {
  const data = await getNewsList()
  
  if (!data) return { paths: [], fallback: true }

  return {
    paths: data.posts.nodes.map((post: any) => ({
      params: { slug: post.title } as any,
    })),
    fallback: true,
  }
}

export async function getStaticProps() {
  const paths = await getNewsList()
  return {
    props: {
      paths,
    },
    revalidate: 60,
  }
}
