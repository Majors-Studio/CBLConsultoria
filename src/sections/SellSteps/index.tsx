import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"
import { usePrecatory } from "@/context/precatoryContext"

const SellSteps: React.FC = () => {
  const { stepsList } = usePrecatory()

  return (
    <ContentBox bgColor="#282f35" py={"60px"}>
      <Title variant="secondary">
        Receba a antecipação do seu precatório em apenas 4 passos
      </Title>
      <Subtitle
        style={{
          color: tokens.colors.neutral.lowLight,
          marginTop: 12,
        }}
      >
        É simples, rápido e o principal, seguro
      </Subtitle>

      <C.StepsList>
        {stepsList.map((step) => (
          <li key={step.id}>
            <C.StepsItemIcon>{step.icon}</C.StepsItemIcon>
            <Subtitle
              style={{
                color: tokens.colors.neutral.lowLight,
                textAlign: "left",
                marginTop: 12,
                marginBottom: 32,
                height: 32,
              }}
            >
              {step.title}
            </Subtitle>
            <Description
              style={{
                color: tokens.colors.neutral.lowLight,
                textAlign: "left",
                lineHeight: "22px",
              }}
            >
              {step.text}
            </Description>
          </li>
        ))}
      </C.StepsList>

      <Description
        style={{
          color: tokens.colors.neutral.lowLight,
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
