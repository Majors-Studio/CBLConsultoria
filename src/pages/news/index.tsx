import React from "react"
import * as C from "../../styles/blog"

import CardBlog from "@/components/CardBlog"
import Link from "next/link"
import { useApp } from "@/context/appContext"
import HeadBanner from "@/components/HeadBanner"

const News: React.FC = () => {
  const { newsList } = useApp()

  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      <C.PostsContainer>
        {newsList.map((post, postIndex) => (
          <Link
            key={post.id}
            href={{
              pathname: "news/" + post.title,
              query: { id: postIndex },
            }}
          >
            <CardBlog text={post.title} src={post.image} />
          </Link>
        ))}
      </C.PostsContainer>
    </C.BlogContainer>
  )
}

export default News
