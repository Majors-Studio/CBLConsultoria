import React from "react"
import * as C from "../../styles/blog"

import HeadBanner from "@/components/HeadBanner"
import NewsList from "@/sections/NewsList"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"

const News: React.FC = () => {
  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      <ContentBox
        bgColor={tokens.colors.brand.lightCream}
        style={{
          padding: "60px 0",
        }}
      >
        <NewsList />
      </ContentBox>
    </C.BlogContainer>
  )
}

export default News
