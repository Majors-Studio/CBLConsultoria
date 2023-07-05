import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import CtaButton from "@/components/CtaButton"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"
import { SuccessIcon } from "@/assets/icons"
import { whyToSellList } from "@/utils/dataObjects"

const WhyToSell: React.FC = () => {
  return (
    <ContentBox py={"60px"} bgColor={tokens.colors.brand.lightCream}>
      <Title variant="primary">Por que vender seus precatórios?</Title>

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
