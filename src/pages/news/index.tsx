import React from "react"
import * as C from "../../styles/blog"

// import Image from "next/image";
import CardBlog from "@/components/CardBlog"
import Link from "next/link"
import { useApp } from "@/context/contextApi"

const News: React.FC = () => {
  const { newsList } = useApp()

  return (
    <C.BlogContainer>
        <C.Image
          alt="Blog Image"
          src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGJsb2d8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=500&q=60"
        />
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
