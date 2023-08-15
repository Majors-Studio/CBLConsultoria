import BrazilGraph from "@/assets/svg/BrazilGraph"
import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"
import Anchor from "@/components/Anchor"

import { useDevice } from "@/hooks/useDevice"

const DebitCenary: React.FC = () => {
  const { isDesktop } = useDevice()
  return (
    <ContentBox bgColor={tokens.colors.brand.cta}>
      <Anchor id="divida-nacional" />
      <Title style={{ marginBottom: "50px" }} variant="secondary">
        Cenário da Dívida Nacional em Precatórios
      </Title>

      <C.CenaryInfoContainer>
        <div
          style={{
            width: !isDesktop ? "100%" : "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BrazilGraph />
        </div>

        <C.CenaryTextContainer>
          <Subtitle
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              color:tokens.colors.neutral.highPure
            }}
          >
            A <b>dívida total Brasileira</b> é de<br />
            <span style={{ fontSize: 32 }}>
              R$
              <span style={{ fontSize: 53, marginLeft: "10px" }}>273,1</span>
            </span>{" "}
           
            Bi em precatórios
          </Subtitle>

          <Subtitle
            style={{
              textAlign: isDesktop ? "left" : "right",
              lineHeight: "1.5",
              color:tokens.colors.neutral.highPure
              
            }}
          >
            Atualmente a <b>espera</b> é de até
            <br /> <span style={{ fontSize: 53 }}>20</span>{" "}
            <span style={{ fontSize: 27 }}>anos</span>
          </Subtitle>

          <Subtitle
            style={{
              textAlign: "left",
              lineHeight: "1.5",
              color:tokens.colors.neutral.highPure

            }}
          >
            O estado de <b>São Paulo</b> está <b>pagando em 2022</b><br/> os
            precatórios de <span style={{ fontSize: 53 }}>2009</span>
          </Subtitle>
        </C.CenaryTextContainer>
      </C.CenaryInfoContainer>

      <C.SourceContainer>
        <Title
          variant="secondary"
          style={{
            textAlign: isDesktop ? "left": 'right',
            width: "100%",
          }}
        >
          União R$ 85,4 Bi
        </Title>
        <Subtitle
          style={{
            textAlign: isDesktop ? "left" : 'right',
              color:tokens.colors.neutral.highPure,
              lineHeight: "1.5",
          }}
        >
          Fonte:{" "}
          <a
            href="https://www.cnj.jus.br/pagamento-de-precatorios/"
            style={{ fontWeight: "bold" }}
          >
            CNJ
          </a>
          <br />
          Mapa Anual dos Precatórios | Base 31/12/2022
          <br />
          Precatórios Municipais, Estaduais e Federais
        </Subtitle>
      </C.SourceContainer>
    </ContentBox>
  )
}

export default DebitCenary
