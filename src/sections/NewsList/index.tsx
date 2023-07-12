import CardBlog from "@/components/CardBlog"
import { useApp } from "@/context/appContext"
import Link from "next/link"
import React from "react"

import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import { newsList } from "@/utils/dataObjects"
import { useDevice } from "@/hooks/useDevice"

interface Props {
  list?: {
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
  const { isMobile, isTablet } = useDevice()

  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      style={{
        padding: "4rem 1rem",
        width: "100%",
      }}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : isTablet
          ? "1fr 1fr"
          : "1fr 1fr 1fr",
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
