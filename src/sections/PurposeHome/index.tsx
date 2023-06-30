import { ConfirmIcon } from "@/assets/icons"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import CtaButton from "@/components/CtaButton"
import PurposeForm from "@/components/PurposeForm"
import { useHome } from "@/context/homeContext"
import React from "react"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"

const PurposeHome: React.FC = () => {
  const { infoList } = useHome()
  return (
    <ContentBox
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
        marginTop: 120,
      }}
      bgColor={tokens.colors.brand.lightCream}
    >
      <S.Head>
        <S.Info>
          <Title variant="primary" style={{ textAlign: "left" }}>
            Antecipe seu <strong>precatório</strong> com{" "}
            <strong>Segurança</strong> e <strong>Velocidade</strong>!
          </Title>
          <S.InfoList>
            {infoList.map((item) => (
              <S.PrecatoryInfoItem key={item.id}>
                <ConfirmIcon />
                <Subtitle>{item.title}</Subtitle>
              </S.PrecatoryInfoItem>
            ))}
          </S.InfoList>
          <CtaButton />
        </S.Info>
        <PurposeForm />
      </S.Head>
    </ContentBox>
  )
}

export default PurposeHome
