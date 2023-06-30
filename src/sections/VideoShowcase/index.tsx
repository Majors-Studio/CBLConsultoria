import { Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import CtaButton from "@/components/CtaButton"
import Video from "@/components/Video"
import React from "react"

const VideoShowcase: React.FC = () => {
  return (
    <ContentBox py={"60px"}>
      <Title variant="primary">
        Há mais de uma década no mercado, somos a maior empresa na antecipação
        de precatórios do Brasil
      </Title>

      <Video />

      <CtaButton>Acesse nosso tour virtual!</CtaButton>
    </ContentBox>
  )
}

export default VideoShowcase
