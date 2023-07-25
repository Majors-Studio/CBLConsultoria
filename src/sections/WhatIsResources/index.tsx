import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"
import CtaButton from "@/components/CtaButton"

const WhatIsResources: React.FC = () => {
  const { isMobile } = useDevice()
  return (
    <>
      <ContentBox
        bgColor={tokens.colors.brand.cta}
        py={tokens.space.sizeXl}
        style={{
          marginTop: 120,
        }}
        contentStyle={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Title
          variant="secondary"
          style={{
            borderRight: isMobile
              ? "none"
              : "1px solid " + tokens.colors.brand.pure,
            paddingRight: isMobile ? 0 : 42,
            marginBottom: isMobile ? 32 : 0,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Gestão de Recusos
        </Title>
        <div
          style={{
            marginLeft: isMobile ? 0 : 72,
          }}
        >
          <Subtitle
            style={{
              marginBottom: 42,
              color: tokens.colors.brand.lightCream,
              textAlign: "left",
              lineHeight: "32px",
            }}
          >
            Na CBL Consultoria, entendemos que a Gestão de Recursos é um aspecto
            fundamental para o sucesso de qualquer empreendimento. Seja você um
            indivíduo, uma pequena empresa ou uma grande corporação, é essencial
            maximizar o retorno dos seus investimentos e gerir seus recursos de
            forma inteligente. É exatamente nesse ponto que entramos em ação,
            oferecendo soluções jurídicas personalizadas que otimizam seus
            processos e potencializam seus resultados.
          </Subtitle>

          <Subtitle
            style={{
              marginBottom: 42,
              color: tokens.colors.brand.lightCream,
              textAlign: "left",
              lineHeight: "32px",
            }}
          >
            Nossa vasta experiência no ramo jurídico nos permite compreender as
            complexidades do mercado e antecipar as demandas dos nossos
            clientes. Com um conhecimento profundo das leis e regulamentações
            vigentes, podemos fornecer orientação estratégica em diversos
            aspectos da Gestão de Recursos, tais como:
          </Subtitle>

          <div
            style={{
              marginBottom: 42,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              gap: 32,
            }}
          >
            <C.WhatIsCategory>
              <Subtitle
                style={{
                  color: tokens.colors.brand.lightCream,
                  textAlign: "left",
                  lineHeight: "32px",
                  borderBottom: "1px solid " + tokens.colors.brand.pure,
                }}
              >
                RISCO DE MERCADO
              </Subtitle>
              <Description
                style={{
                  color: tokens.colors.brand.lightCream,
                }}
              >
                O pagamento dos precatórios é determinado por decisões judiciais
                e inclui a correção monetária e juros de mora ao longo do tempo.
              </Description>
            </C.WhatIsCategory>

            <C.WhatIsCategory>
              <Subtitle
                style={{
                  color: tokens.colors.brand.lightCream,
                  textAlign: "left",
                  lineHeight: "32px",
                  borderBottom: "1px solid " + tokens.colors.brand.pure,
                }}
              >
                RISCO DE CRÉDITO
              </Subtitle>
              <Description
                style={{
                  color: tokens.colors.brand.lightCream,
                }}
              >
                Não há exposição a risco de crédito. O processo de liquidação
                dos precatórios ocorre de forma sequencial e obedece à ordem
                cronológica estabelecida nas esferas federal, estadual e
                municipal.
                <br />
                <br />
                Anualmente, uma parcela da receita líquida RCL é reservada pelas
                três esferas para pagamento dos títulos seguindo essa ordem
                cronológica.
              </Description>
            </C.WhatIsCategory>
            <C.WhatIsCategory>
              <Subtitle
                style={{
                  color: tokens.colors.brand.lightCream,
                  textAlign: "left",
                  lineHeight: "32px",
                  borderBottom: "1px solid " + tokens.colors.brand.pure,
                }}
              >
                RISCO DE LIQUIDEZ
              </Subtitle>
              <Description
                style={{
                  color: tokens.colors.brand.lightCream,
                }}
              >
                Atualmente, a Procuradoria Geral do Estado de São Paulo
                implementou um acordo estabelecido pela Emenda Constitucional
                94/2016, válido até 31 de dezembro de 2024.
                <br />
                <br />
                Esse acordo regulamenta a possibilidade de antecipação do
                pagamento dos precatórios, através de acordos entre as partes
                envolvidas. Isso contribui para a redução da dívida do estado e
                proporciona maior liquidez aos beneficiários.
              </Description>
            </C.WhatIsCategory>
          </div>

          <Description
            style={{
              color: tokens.colors.brand.lightCream,
            }}
          >
            *Temos como objetivo criar fundos de investimento para oferecer uma
            ampla diversificação a investidores institucionais e individuais.
            Através da CBL Consultoria, nossa missão é garantir um retorno de
            investimento sólido, utilizando nossa vasta experiência na
            originação e qualificação de ativos, sempre priorizando a segurança
            dos investimentos.
          </Description>
        </div>
      </ContentBox>

    </>
  )
}

export default WhatIsResources