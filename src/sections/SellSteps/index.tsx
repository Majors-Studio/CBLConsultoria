import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { tokens } from "@/utils/tokens"
import React from "react"
import * as C from "./styles"
import { stepsList } from "@/utils/dataObjects"
import { Balancer } from "react-wrap-balancer"

const SellSteps: React.FC = () => {
  return (
    <ContentBox
      bgColor={tokens.colors.brand.lightCream}
      py={tokens.space.sizeXl}
    >
      <Title>
        <b>Agora</b> se tornou mais <b>prático e seguro antecipar</b> seu
        precatório
      </Title>
      <Subtitle
        style={{
          marginTop: 12,
        }}
      >
        É simples, rápido e o principal, seguro
      </Subtitle>

      <C.StepsList>
        {stepsList.map((step) => (
          <C.StepItem key={step.id}>
            <C.StepsItemIcon style={{ color: tokens.colors.brand.cta }}>
              {step.icon}
            </C.StepsItemIcon>
            <Subtitle
              style={{
                color: tokens.colors.brand.cta,
                textAlign: "left",
                fontWeight: "600",
                marginTop: 12,
                marginBottom: 32,
                height: 32,
              }}
            >
              {step.title}
            </Subtitle>
            <Description
              style={{
                color: tokens.colors.brand.cta,
                textAlign: "left",
                lineHeight: "22px",
              }}
            >
              <Balancer>{step.text}</Balancer>
            </Description>
          </C.StepItem>
        ))}
      </C.StepsList>

      <Description
        style={{
          color: tokens.colors.brand.cta,
        }}
      >
        A venda do precatório é realizada com muita segurança e agilidade, todo
        o procedimento é reconhecido em cartório e o ente público, o devedor,
        não se opõe a cessões de crédito, trata-se de um ato TOTALMENTE LEGAL.
        <br />
        <br />A CESSÃO É SEGURA, mas sempre deve ser realizada por uma empresa
        capacitada para analisar todos os processos e documentos necessários.
      </Description>
    </ContentBox>
  )
}

export default SellSteps
