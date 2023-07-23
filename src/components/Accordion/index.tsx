import TriangleDownIcon from "@/assets/icons/TriangleDownIcon"
import React, { useState } from "react"

import * as S from "./styles"
import Subtitle from "../Subtitle"
import Description from "../Description"

interface FaqItemProps {
  style?: React.CSSProperties
  data: {
    id: number
    title: string
    description: string
  }[]
}

const Accordion: React.FC<FaqItemProps> = ({ data,style }) => {
  const [faqOpened, setFaqOpened] = useState<number | null>(null)

  return (
    <S.List style={style}>
      {data.map((item, index) => (
        <S.Item
          key={item.id}
          onClick={() => {
            if (faqOpened === index) return setFaqOpened(null)

            setFaqOpened(index)
          }}
          ref={(el: any) => {
            if (el && faqOpened === index) {
              el.style.maxHeight = `${el.scrollHeight}px`
            } else if (el) {
              el.style.maxHeight = `84px`
            } else {
              return
            }
          }}
        >
          <S.Header>
            <Subtitle>{item.title}</Subtitle>
            <S.Icon
              style={{
                transform: faqOpened === index ? "rotate(180deg)" : "",
                transition: "transform 0.4s ease-in-out",
              }}
            >
              <TriangleDownIcon />
            </S.Icon>
          </S.Header>
          <Description>{item.description}</Description>
        </S.Item>
      ))}
    </S.List>
  )
}

export default Accordion
