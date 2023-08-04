import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { tokens } from "@/utils/tokens"
import React from "react"
import * as C from "./styles"
import { stepsList } from "@/utils/dataObjects"
import { Balancer } from "react-wrap-balancer"
import { useDevice } from "@/hooks/useDevice"

const SellSteps: React.FC = () => {
  const {isDesktop} = useDevice()
  return (
    <ContentBox bgColor={tokens.colors.brand.lightCream}>
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
                marginBottom: isDesktop ? 32 : 12,
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
        A venda do precatório, após análise das documentações pela CBL, é
        realizada com segurança e agilidade e todo o procedimento é
        reconhecido em cartório.
        <br />
        <br />A CESSÃO É SEGURA, mas sempre deve ser realizada por um
        acompanhamento jurídico capacitado para analisar todos os processos e
        documentos necessários.
      </Description>
    </ContentBox>
  )
}

export default SellSteps
