import React from "react"

import * as C from "./styles"
import Title from "../Title"

interface HeadBannerProps {
  title?: string
}

const HeadBanner: React.FC<HeadBannerProps> = ({ title }) => {
  return (
    <C.Container>
      <C.Image src="https://source.unsplash.com/featured" alt="bg" />
      <C.Overlay />
      <Title
        style={{
          color: "#000",
        }}
        text={title}
      />
    </C.Container>
  )
}

export default HeadBanner
