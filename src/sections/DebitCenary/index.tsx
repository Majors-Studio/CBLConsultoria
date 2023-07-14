import BrazilGraph from "@/assets/svg/BrazilGraph";
import { Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import { tokens } from "@/utils/tokens";
import React from "react";

import * as C from "./styles";
import Anchor from "@/components/Anchor";

const DebitCenary: React.FC = () => {
  return (
    <ContentBox bgColor={tokens.colors.brand.dark} py={"60px"}>
      <Anchor id="data" />
      <Title style={{ marginBottom: "50px" }} variant="secondary">
        Cenário da Dívida Nacional em Precatórios
      </Title>

      <C.CenaryInfoContainer>
        <BrazilGraph />

        <C.CenaryTextContainer>
          <C.CenaryText>
            A <strong>dívida total Brasileira</strong> é de{" "}
            <span style={{ fontSize: 32 }}>
              R$<span style={{ fontSize: 53, marginLeft: "10px" }}>273,1</span>
            </span>{" "}
            <br />
            Bilhões em precatórios
          </C.CenaryText>

          <C.CenaryText>
            Atualmente a <strong>espera</strong> é de até
            <br /> <span style={{ fontSize: 53 }}>20</span>{" "}
            <span style={{ fontSize: 27 }}>anos</span>
          </C.CenaryText>

          <C.CenaryText>
            O estado de <strong>São Paulo</strong> está{" "}
            <strong>pagando em 2022</strong> os precatórios de{" "}
            <span style={{ fontSize: 53 }}>2009</span>
          </C.CenaryText>
        </C.CenaryTextContainer>
      </C.CenaryInfoContainer>

      <C.CenaryInfoContainer
        style={{
          marginTop: 42,
          alignItems: "center",
        }}
      >
        <C.TotalDebt>União R$ 85,4 Bi</C.TotalDebt>

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
