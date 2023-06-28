import TriangleDownIcon from "@/assets/icons/TriangleDownIcon"
import React, { useState } from "react"

import * as S from "./styles"

interface FaqItemProps {
  data: {
    id: number
    title: string
    description: string
  }[]
}

const Accordion: React.FC<FaqItemProps> = ({ data }) => {
  const [faqOpened, setFaqOpened] = useState<number | null>(null)

  return (
    <S.List>
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
            <S.Title>{item.title}</S.Title>
            <S.Icon
              style={{
                transform: faqOpened === index ? "rotate(180deg)" : "",
                transition: "transform 0.4s ease-in-out",
              }}
            >
              <TriangleDownIcon />
            </S.Icon>
          </S.Header>
          <S.Description>{item.description}</S.Description>
        </S.Item>
      ))}
    </S.List>
  )
}

export default Accordion
