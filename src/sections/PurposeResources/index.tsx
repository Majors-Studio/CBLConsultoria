import { ConfirmIcon } from "@/assets/icons"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import PurposeForm from "@/components/PurposeForm"
import React from "react"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"

const PurposeResources: React.FC = () => {
  return (
    <ContentBox
      style={{}}
      bgColor={tokens.colors.brand.lightCream}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: "1fr",
        width: "100%",
        gap: tokens.space.sizeXxs,
      }}
    >
      <S.Info>
        <Title variant="primary">
          Converse com um de <b>nossos especialistas</b> para receber um <b>atendimento Personalizado</b>
        </Title>
      </S.Info>
      <PurposeForm />
    </ContentBox>
  )
}

export default PurposeResources
