import { Title } from "@/components"
import SpeechCarousel from "@/components/SpeechCarousel"
import React from "react"

import * as C from "./styles"
import { feedbackList } from "@/utils/dataObjects"

const WhyToInvest: React.FC = () => {
    
  return (
    <C.WhatContainer>
      <Title
        style={{
          marginBottom: 32,
        }}
        variant="tertiary"
      >
        Porquê investir em precatórios?
      </Title>

      <SpeechCarousel data={feedbackList} />
    </C.WhatContainer>
  )
}

export default WhyToInvest
