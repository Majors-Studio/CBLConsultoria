import { Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import CtaButton from "@/components/CtaButton"
import Video from "@/components/Video"
import { tokens } from "@/utils/tokens"
import React from "react"

const VideoShowcase: React.FC = () => {
  return (
    <ContentBox
      py={"60px"}
      bgColor={tokens.colors.brand.light}
      contentStyle={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      
      }}
    >
      <Title variant="primary">
        Há mais de uma década no mercado, somos a maior empresa na antecipação
        de precatórios do Brasil
      </Title>

      <Video />

      <CtaButton>Acesso nosso catálogo</CtaButton>
    </ContentBox>
  )
}

export default VideoShowcase
