import React from "react"

import * as C from "./styles"
import Title from "../Title"

interface HeadBannerProps {
  title?: string
  source?: string
  color?: string
}

const HeadBanner: React.FC<HeadBannerProps> = ({ title ,  source ='https://source.unsplash.com/featured', color ='#000'}) => {
  return (
    <C.Container>
      <C.Image src={source} alt="bg" />
      <C.Overlay />
      <Title
        style={{
          color: color,
        }}
        text={title}
      />
    </C.Container>
  )
}

export default HeadBanner
