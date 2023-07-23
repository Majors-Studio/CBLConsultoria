import React from "react"
import * as C from "./styles"
import Title from "../Title"
import Description from "../Description"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string | React.ReactNode
  index: number
}

export default function Card({ index, title, description, ...props }: CardProps) {
  return (
    <C.CardContainer {...props}>
      <Title>{title}</Title>
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
