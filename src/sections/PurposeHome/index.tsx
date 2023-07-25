import { ConfirmIcon } from "@/assets/icons"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import PurposeForm from "@/components/PurposeForm"
import React from "react"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"
import { infoList } from "@/utils/dataObjects"
import { useDevice } from "@/hooks/useDevice"

const PurposeHome: React.FC = () => {
  const { isDesktop } = useDevice()
  return (
    <ContentBox
      py={"60px"}
      style={{}}
      bgColor={tokens.colors.brand.lightCream}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
        width: "100%",
        gap: tokens.space.sizeXxs,
      }}
    >
      <S.Info>
        <Title variant="primary" style={{ textAlign: "left" }}>
          <b>Antecipe</b> seu precatório com <b>Segurança</b> e{" "}
          <b>Velocidade</b>!
        </Title>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: tokens.space.sizeXxs,
          }}
        >
          {infoList.map((item) => (
            <S.PrecatoryInfoItem key={item.id}>
              <ConfirmIcon />
              <Subtitle>{item.title}</Subtitle>
            </S.PrecatoryInfoItem>
          ))}
        </ul>
      </S.Info>
      <PurposeForm />
    </ContentBox>
  )
}

export default PurposeHome
