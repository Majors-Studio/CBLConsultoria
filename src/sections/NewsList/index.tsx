import CardBlog from "@/components/CardBlog"
import { useApp } from "@/context/appContext"
import Link from "next/link"
import React from "react"

import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"

const NewsList: React.FC = () => {
  const { newsList } = useApp()

  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      style={{
        padding: "60px 20px",
      }}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
      }}
    >
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
    </ContentBox>
  )
}

export default NewsList
