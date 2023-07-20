import React from "react"
import Image from 'next/image';
import * as C from "./styles"
import Title from "../Title"
import img1 from "../../assets/png/legal-advice.png"
import { tokens } from "@/utils/tokens";

interface HeadBannerProps {
  title?: string
  source?: string 
  color?: string
}

const HeadBanner: React.FC<HeadBannerProps> = ({ title ,  source, color =tokens.colors.brand.light}) => {
  return (
    <C.Container>
     <C.Overlay>
      <Title 
        style={{
          color: color,
        }}>{title}
        </Title>
      </C.Overlay>
      <Image  src={source || img1} alt="bg" priority />
    </C.Container>
  )
}

export default HeadBanner
