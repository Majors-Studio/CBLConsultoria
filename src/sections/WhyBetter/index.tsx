import React from "react"
import ContentBox from "@/components/ContentBox"
import { Subtitle, Title } from "@/components"
import Description from "@/components/Description"
import { DangerIcon, SuccessIcon } from "@/assets/icons"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"
import { chooseList } from "@/utils/dataObjects"

const WhyBetter: React.FC = () => {
  return (
    <ContentBox bgColor={tokens.colors.brand.lightCream}>
      <Title variant="primary">
        A CBL Consultoria é a melhor opção para você que deseja antecipar o seu
        precatório
      </Title>
      <Subtitle style={{ marginTop: "20px" }}>
        Se livre da longa fila de espera do Governo para pagamento de seu
        precatório.
      </Subtitle>

      <S.ChooseList>
        {chooseList.map((item) => (
          <S.ChooseItem key={item.id}>
            <S.ChooseItemTitle>
              <Subtitle
                style={{
                  color: tokens.colors.neutral.highPure,
                }}
              >
                {item.title}
              </Subtitle>
            </S.ChooseItemTitle>
            <S.ChooseItemList>
              {item.list.map((listItem) => (
                <S.ChooseItemListItem key={listItem.id}>
                  <S.ChooseItemListItemStatus>
                    {listItem.status === "danger" ? (
                      <DangerIcon />
                    ) : (
                      <SuccessIcon />
                    )}
                  </S.ChooseItemListItemStatus>

                  <Description>{listItem.text}</Description>
                </S.ChooseItemListItem>
              ))}
            </S.ChooseItemList>
          </S.ChooseItem>
        ))}
      </S.ChooseList>
    </ContentBox>
  )
}

export default WhyBetter
