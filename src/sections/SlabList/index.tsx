import { Card } from "@/components"
import ContentBox from "@/components/ContentBox"
import { cardsList } from "@/utils/dataObjects"
import { tokens } from "@/utils/tokens"
import React from "react"

const SlabList: React.FC = () => {
  return (
    <ContentBox py={tokens.space.sizeXl} bgColor={tokens.colors.neutral.highPure}>
      {cardsList.map((card, index) => (
        <Card
          key={index}
          index={card.id}
          title={card.title}
          description={card.description}
        />
      ))}
    </ContentBox>
  )
}

export default SlabList
