import CardBlog from "@/components/CardBlog"
import { useApp } from "@/context/appContext"
import Link from "next/link"
import React from "react"

import * as C from "./styles"

const NewsList: React.FC = () => {
  const { newsList } = useApp()

  return (
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
  )
}

export default NewsList
