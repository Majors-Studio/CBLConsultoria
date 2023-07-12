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
    metadata: {
      tags: any[]
    }
    sys: {
      space: {
        sys: {
          type: string
          linkType: string
          id: string
        }
      }
      id: string
      type: string
      createdAt: string
      updatedAt: string
      environment: {
        sys: {
          id: string
          type: string
          linkType: string
        }
      }
      revision: number
      contentType: {
        sys: {
          type: string
          linkType: string
          id: string
        }
      }
      locale: string
    }
    fields: {
      title: string
      publishedDate: string
      content: {
        data: any
        content: {
          data: any
          content: {
            data: any
            marks: any[]
            value: string
            nodeType: string
          }[]
          nodeType: string
        }[]
        nodeType: string
      }
      featuredImage: {
        fields: {
          title: string
          description: string
          file: {
            url: string
            details: {
              size: number
              image: {
                width: number
                height: number
              }
            }
            fileName: string
          }
        }
      }
    }
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
            key={post.sys.id}
            href={{
              pathname: "news/" + post.fields.title,
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
