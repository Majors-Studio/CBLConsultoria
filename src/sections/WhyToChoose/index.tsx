import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import Description from "@/components/Description";
import { tokens } from "@/utils/tokens";
import React from "react";

import * as S from "./styles";
import { whyList } from "@/utils/dataObjects";

const WhyToChoose: React.FC = () => {
  return (
    <ContentBox bgColor={tokens.colors.brand.pure} py={"60px"}>
      <Title variant="secondary">Porque escolher a Harmony?</Title>
      <Description
        style={{ color: "#FFF", marginTop: "40px", fontSize: "17px" }}
      >
        A CBL Consultoria estabeleceu-se como uma autoridade inquestionável no
        campo de investimentos em precatórios e consultoria jurídica. Com anos
        de experiência e um histórico comprovado de resultados bem-sucedidos, a
        empresa conquistou a confiança de clientes exigentes em todo o país. A
        equipe altamente capacitada da CBL possui profundo conhecimento jurídico
        e financeiro, garantindo a elaboração de estratégias personalizadas e
        soluções inovadoras para cada cliente. Seja você um investidor em busca
        de oportunidades lucrativas ou um indivíduo que necessita de consultoria
        jurídica especializada, a CBL Consultoria é a escolha certa para
        alcançar seus objetivos com segurança e eficiência.
      </Description>

      <S.WhyList>
        {whyList.map((item) => (
          <S.WhyItem key={item.id}>
            <S.WhyItemIcon>{item.icon}</S.WhyItemIcon>

            <S.WhyItemTexts>
              <Subtitle
                style={{
                  textAlign: "left",
                }}
              >
                {item.title}
              </Subtitle>
              <Description>{item.description}</Description>
            </S.WhyItemTexts>
          </S.WhyItem>
        ))}
      </S.WhyList>
      <Description
        style={{ marginTop: "40px", color: "#FFF", fontSize: "17px" }}
      >
        Somos a principal referência no mercado quando se trata de investimentos
        em precatórios e consultoria jurídica. Com uma trajetória sólida e uma
        reputação impecável, a empresa se destaca pela excelência de seus
        serviços e pelos resultados consistentes entregues aos clientes.
        Contando com uma equipe de profissionais altamente capacitados e
        experientes, oferecemos soluções personalizadas e estratégias inovadoras
        para atender às necessidades individuais de cada cliente. Seja você um
        investidor em busca de oportunidades rentáveis ou alguém que precisa de
        suporte jurídico especializado, confie na CBL Consultoria para
        orientá-lo rumo ao sucesso financeiro e à resolução eficaz de questões
        legais complexas. Sua tranquilidade e confiança são prioridades para
        nós.
      </Description>
    </ContentBox>
  );
};

export default WhyToChoose;
