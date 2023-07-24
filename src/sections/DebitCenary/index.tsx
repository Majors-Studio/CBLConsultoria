import BrazilGraph from "@/assets/svg/BrazilGraph";
import { Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import { tokens } from "@/utils/tokens";
import React from "react";

import * as C from "./styles";
import Anchor from "@/components/Anchor";

import { useDevice } from "@/hooks/useDevice";

const DebitCenary: React.FC = () => {
  const { isMobile } = useDevice();
  return (
    <ContentBox bgColor={tokens.colors.brand.dark} py={tokens.space.sizeXl}>
      <Anchor id="data" />
      <Title style={{ marginBottom: "50px" }} variant="secondary">
        Cenário da Dívida Nacional em Precatórios
      </Title>

      <C.CenaryInfoContainer>
        <BrazilGraph />

        <C.CenaryTextContainer>
          <C.CenaryText>
            A <b>dívida total Brasileira</b> é de{" "}
            <span style={{ fontSize: 32 }}>
              R$
              <span style={{ fontSize: 53, marginLeft: "10px" }}>273,1</span>
            </span>{" "}
            <br />
            Bilhões em precatórios
          </C.CenaryText>

          <C.CenaryText>
            Atualmente a <b>espera</b> é de até
            <br /> <span style={{ fontSize: 53 }}>20</span>{" "}
            <span style={{ fontSize: 27 }}>anos</span>
          </C.CenaryText>

          <C.CenaryText>
            O estado de <b>São Paulo</b> está{" "}
            <b>pagando em 2022</b> os precatórios de{" "}
            <span style={{ fontSize: 53 }}>2009</span>
          </C.CenaryText>
        </C.CenaryTextContainer>
      </C.CenaryInfoContainer>

      <C.CenaryInfoContainer
        style={{
          marginTop: 42,
          alignItems:  isMobile ?'left' : "center",
        }}
      >
        <Title variant="secondary" style={{
          textAlign: 'left',
          width: '100%',
        }}>União R$ 85,4 Bi</Title>

        <C.SourceContainer>
          <C.SourceText>
            Fonte:{" "}
            <a
              href="https://www.cnj.jus.br/pagamento-de-precatorios/"
              style={{ fontWeight: "bold" }}
            >
              CNJ
            </a>
          </C.SourceText>

          <C.SourceText>
            Mapa Anual dos Precatórios | Base 31/12/2022
          </C.SourceText>

          <C.SourceText>
            Precatórios Municipais, Estaduais e Federais
          </C.SourceText>
        </C.SourceContainer>
      </C.CenaryInfoContainer>
    </ContentBox>
  );
};

export default DebitCenary;
