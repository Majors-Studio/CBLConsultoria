import CardBlog from "@/components/CardBlog"
import { useApp } from "@/context/appContext"
import Link from "next/link"
import React from "react"

import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import { newsList } from "@/utils/dataObjects"

interface Props {
  list: {
    id: number
    featuredImage: {
      node: {
        sourceUrl: string
      }
    }
    title: string
    date: Date
    author: string
    text: string
    source: string
    link: string
  }[]
}

const NewsList: React.FC<Props> = ({ list }) => {
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
      {list?.map((post) => {
        return (
          <Link
            key={post.id}
            href={{
              pathname: "news/" + post.title,
              query: { id: post.id },
            }}
          >
            <CardBlog
              text={post.title}
              src={post.featuredImage?.node.sourceUrl}
            />
          </Link>
        )
      })}
    </ContentBox>
  )
}

export default NewsList
