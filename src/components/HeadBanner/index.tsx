import React from "react"
import Image from 'next/image';
import * as C from "./styles"
import Title from "../Title"
import img1 from "../../assets/png/legal-advice.png"

interface HeadBannerProps {
  title?: string
  source?: string 
  color?: string
}

const HeadBanner: React.FC<HeadBannerProps> = ({ title ,  source, color ='#000'}) => {
  return (
    <C.Container>
     <C.Overlay>
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
