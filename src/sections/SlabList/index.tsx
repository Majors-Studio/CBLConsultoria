import { Card } from "@/components"
import ContentBox from "@/components/ContentBox"
import { useAbout } from "@/context/aboutContext"
import React from "react"

const SlabList: React.FC = () => {
  const { cardsList } = useAbout()

  return (
    <ContentBox py={"60px"}>
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
