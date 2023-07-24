import { ConfirmIcon } from "@/assets/icons"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import PurposeForm from "@/components/PurposeForm"
import React from "react"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"
import { infoList } from "@/utils/dataObjects"

const PurposeHome: React.FC = () => {
  return (
    <ContentBox
      style={{
        paddingTop: "80px",
        paddingBottom: "100px",
      }}
      bgColor={tokens.colors.brand.lightCream}
    >
      <S.Head>
        <S.Info>
          <Title variant="primary" style={{ textAlign: "left" }}>
            <b>Antecipe</b> seu precatório com <b>Segurança</b> e{" "}
            <b>Velocidade</b>!
          </Title>
          <S.InfoList>
            {infoList.map((item) => (
              <S.PrecatoryInfoItem key={item.id}>
                <ConfirmIcon />
                <Subtitle>{item.title}</Subtitle>
              </S.PrecatoryInfoItem>
            ))}
          </S.InfoList>
        </S.Info>
        <PurposeForm />
      </S.Head>
    </ContentBox>
  )
}

export default PurposeHome
