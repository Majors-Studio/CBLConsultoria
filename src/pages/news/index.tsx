import React from "react"
import * as C from "../../styles/blog"

import HeadBanner from "@/components/HeadBanner"
import NewsList from "@/sections/NewsList"

const News: React.FC = () => {
  return (
    <C.BlogContainer>
      <HeadBanner title="Notícias" />
      <NewsList />
    </C.BlogContainer>
  )
}

export default News
