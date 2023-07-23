import React from "react"

import * as S from "./styles"
import Subtitle from "../Subtitle"

interface ListProps extends React.HTMLAttributes<HTMLOListElement> {
  items: {
    id: number
    title: string
  }[]
  variant?: "primary" | "secondary"
}

const List: React.FC<ListProps> = ({ items, variant = 'primary', ...props }) => {
  return (
    <S.ListContainer {...props}>
      {items.map((item) => (
        <S.ListItem key={item.id}>
          <Subtitle
            style={{
              color: variant === "primary" ? "#fff" : "#000",
              textAlign: "right",
            }}
          >
            {item.title}
          </Subtitle>
        </S.ListItem>
      ))}
    </S.ListContainer>
  )
}

export default List
