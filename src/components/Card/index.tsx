import React from "react"
import * as C from "./styles"
import Title from "../Title"
import Description from "../Description"
import Subtitle from "../Subtitle"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string | React.ReactNode
  index: number
}

export default function Card({ index, title, description, ...props }: CardProps) {
  return (
    <C.CardContainer {...props}>
      <Subtitle>{title}</Subtitle>
      {description && (
        <>
          <C.Divider />
          <Description>{description}</Description>
        </>
      )}
      <C.CardIndex>{index + 1}</C.CardIndex>
    </C.CardContainer>
  )
}
