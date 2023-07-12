import CardBlog from "@/components/CardBlog"
import { useApp } from "@/context/appContext"
import Link from "next/link"
import React from "react"

import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import { newsList } from "@/utils/dataObjects"
import { useDevice } from "@/hooks/useDevice"
import { newsInterface } from "@/interfaces/news.interface"

interface Props {
  list?: newsInterface[]
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
            key={post.sys.id}
            href={{
              pathname: "news/post/",
              query: { id: post.sys.id },
            }}
          >
            <CardBlog
              text={post.fields.title}
              src={post.fields.featuredImage?.fields.file.url}
            />
          </Link>
        )
      })}
    </ContentBox>
  )
}

export default NewsList
