import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import Description from "@/components/Description"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import React from "react"

import * as C from "./styles"

const WhatIsPrecatory: React.FC = () => {
    const { isMobile,isTablet} = useDevice()
  return (
    <ContentBox
      bgColor={tokens.colors.highlight.light}
      py={"60px"}
      contentStyle={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
      }}
    >
      <Title
        style={{
          borderRight: isMobile ? "none" : "1px solid #e2a141",
          paddingRight: isMobile ? 0 : 42,
          marginBottom: isMobile ? 32 : 0,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        O que é um precatório?
      </Title>
      <div
        style={{
          marginLeft: isMobile || isTablet ? 0 : 72,
        }}
      >
        <Subtitle
          style={{
            marginBottom: 42,
            color: tokens.colors.neutral.lowLight,
            textAlign: "left",
            lineHeight: "32px",
          }}
        >
          Precatórios são requisições de pagamento expedidas pelo Judiciário
          para cobrar de municípios, estados ou da União, assim como de
          autarquias, fundações e universidades, o pagamento de valores devidos
          após condenação judicial definitiva.
        </Subtitle>

        <Subtitle
          style={{
            marginBottom: 42,
            color: tokens.colors.neutral.lowLight,
            textAlign: "left",
            lineHeight: "32px",
          }}
        >
          Estas ações dividem-se em duas categorias:
        </Subtitle>

        <div
          style={{
            marginBottom: 42,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 32,
          }}
        >
          <C.WhatIsCategory>
            <Subtitle
              style={{
                color: tokens.colors.neutral.lowLight,
                textAlign: "left",
                lineHeight: "32px",
                borderBottom: "1px solid #e2a141",
              }}
            >
              Comuns
            </Subtitle>
            <Description
              style={{
                color: tokens.colors.neutral.lowLight,
              }}
            >
              Desapropriação, tributações, entre outros (para pessoas jurídicas
              é muito comum).
            </Description>
          </C.WhatIsCategory>

          <C.WhatIsCategory>
            <Subtitle
              style={{
                color: tokens.colors.neutral.lowLight,
                textAlign: "left",
                lineHeight: "32px",
                borderBottom: "1px solid #e2a141",
              }}
            >
              Alimentares
            </Subtitle>
            <Description
              style={{
                color: tokens.colors.neutral.lowLight,
              }}
            >
              Originam de questões salariais, pensões, aposentadorias, verbas de
              sustento em geral, entre outros.
            </Description>
          </C.WhatIsCategory>
        </div>

        <Description
          style={{
            color: tokens.colors.neutral.lowLight,
          }}
        >
          *O pagamento dos precatórios obedece uma ordem cronológica e uma ordem
          de prioridade. Porém o pagamento da dívida é extremamente moroso e
          incerto.
        </Description>
      </div>
    </ContentBox>
  )
}

export default WhatIsPrecatory
