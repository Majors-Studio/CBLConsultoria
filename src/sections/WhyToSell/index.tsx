import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import CtaButton from "@/components/CtaButton"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"
import { SuccessIcon } from "@/assets/icons"
import { whyToSellList } from "@/utils/dataObjects"
import Anchor from "@/components/Anchor"

const WhyToSell: React.FC = () => {
  return (
    <ContentBox  bgColor={tokens.colors.brand.cta}>
      <Anchor id="beneficios" />
      <Title variant="secondary">Por que vender seus precatórios?</Title>

      <C.WhyToSellList>
        {whyToSellList.map((why) => (
          <C.WhyToSellItem key={why.id}>
            <C.WhyToSellItemIcon>
              <SuccessIcon />
            </C.WhyToSellItemIcon>

            <Subtitle
              style={{
                textAlign: "left",
                lineHeight: "32px",
                color: tokens.colors.brand.lightCream,
              }}
            >
              {why.text}
            </Subtitle>
          </C.WhyToSellItem>
        ))}
        <CtaButton>Quero vender meu precatório</CtaButton>
      </C.WhyToSellList>
    </ContentBox>
  )
}

export default WhyToSell
