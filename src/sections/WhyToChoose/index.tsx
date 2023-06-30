import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { useHome } from "@/context/homeContext"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as S from "./styles"

const WhyToChoose: React.FC = () => {
  const { whyList } = useHome()

  return (
    <ContentBox bgColor={tokens.colors.highlight.dark} py={"60px"}>
      <Title variant="secondary">Porque escolher a Harmony?</Title>

      <S.WhyList>
        {whyList.map((item) => (
          <S.WhyItem key={item.id}>
            <S.WhyItemIcon>{item.icon}</S.WhyItemIcon>

            <S.WhyItemTexts>
              <Subtitle
                style={{
                  textAlign: "left",
                }}
              >
                {item.title}
              </Subtitle>
              <Description>{item.description}</Description>
            </S.WhyItemTexts>
          </S.WhyItem>
        ))}
      </S.WhyList>
    </ContentBox>
  )
}

export default WhyToChoose
