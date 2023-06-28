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
    <S.FaqList>
      {data.map((item, index) => (
        <S.FaqItem
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
          <S.FaqItemHeader>
            <S.FaqItemTitle>{item.title}</S.FaqItemTitle>
            <S.FaqItemIcon
              style={{
                transform: faqOpened === index ? "rotate(180deg)" : "",
                transition: "transform 0.4s ease-in-out",
              }}
            >
              <TriangleDownIcon />
            </S.FaqItemIcon>
          </S.FaqItemHeader>
          <S.FaqItemDescription>{item.description}</S.FaqItemDescription>
        </S.FaqItem>
      ))}
    </S.FaqList>
  )
}

export default Accordion
