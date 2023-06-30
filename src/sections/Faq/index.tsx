import { Subtitle, Title } from "@/components"
import Accordion from "@/components/Accordion"
import ContentBox from "@/components/ContentBox"
import { useHome } from "@/context/homeContext"
import { tokens } from "@/utils/tokens"
import React from "react"

const Faq: React.FC = () => {
  const { faqList } = useHome()

  return (
    <ContentBox py={"60px"} bgColor={tokens.colors.brand.lightCream}>
      <Title variant="primary">FAQ - Perguntas Frequentes</Title>
      <Subtitle>Dúvidas? Estamos aqui para ajudar.</Subtitle>

      <Accordion data={faqList} />
    </ContentBox>
  )
}

export default Faq