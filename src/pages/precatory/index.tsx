import React from "react";
import * as C from "@/styles/precatory";
import BrazilGraph from "@/assets/svg/BrazilGraph";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { SuccessIcon } from "@/assets/icons";
import PurposeForm from "@/components/PurposeForm";

import Chart from "@/components/Chart";
import CtaButton from "@/components/CtaButton";
import SpeechCarousel from "@/components/SpeechCarousel";
import { useApp } from "@/context/appContext";
import { usePrecatory } from "@/context/precatoryContext";
import HeadBanner from "@/components/HeadBanner";

import { useDevice } from "@/hooks/useDevice";
import { Subtitle, Title } from "@/components";
import { tokens } from "@/utils/tokens";
import Description from "@/components/Description";
import ContentBox from "@/components/ContentBox";
import Link from "next/link";

ChartJS.register(ArcElement, Tooltip, Legend);

const Precatory: React.FC = () => {
  const { isMobile, isTablet } = useDevice();
  const { userList, newsList } = useApp();
  const { stepsList, whyToSellList } = usePrecatory();

  const chartData = {
    labels: ["RJ", "PR", "SP", "RS", "União"],
    datasets: [
      {
        label: "Valor em %",
        data: [5, 4, 33, 9, 25],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  } as ChartData<"doughnut", number[], string>;

  return (
    <>
      <HeadBanner title="Precatórios" />

      <ContentBox
        bgColor={tokens.colors.highlight.dark}
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
          variant="secondary"
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
            autarquias, fundações e universidades, o pagamento de valores
            devidos após condenação judicial definitiva.
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
                Desapropriação, tributações, entre outros (para pessoas
                jurídicas é muito comum).
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
                Originam de questões salariais, pensões, aposentadorias, verbas
                de sustento em geral, entre outros.
              </Description>
            </C.WhatIsCategory>
          </div>

          <Description
            style={{
              color: tokens.colors.neutral.lowLight,
            }}
          >
            *O pagamento dos precatórios obedece uma ordem cronológica e uma
            ordem de prioridade. Porém o pagamento da dívida é extremamente
            moroso e incerto.
          </Description>
        </div>
      </ContentBox>

      <div id="data" />
      <ContentBox bgColor="#1f2428" py={"60px"}>
        <Title variant="secondary">
          Cenário da Dívida Nacional em Precatórios
        </Title>

        <C.CenaryInfoContainer>
          <BrazilGraph />

          <C.CenaryTextContainer>
            <C.CenaryText>
              A <strong>dívida total Brasileira</strong> é de{" "}
              <span style={{ fontSize: 27 }}>R$</span>{" "}
              <span style={{ fontSize: 53 }}>273,1</span>
              <br />
              Bilhões em precatórios
            </C.CenaryText>

            <C.CenaryText>
              Atualmente a <strong>espera</strong> é de até{" "}
              <span style={{ fontSize: 53 }}>20</span>{" "}
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
              <a href="https://www.cnj.jus.br/pagamento-de-precatorios/">CNJ</a>
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

      <ContentBox
        bgColor="#282f35"
        py={"60px"}
        contentStyle={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gridGap: isMobile ? "60px" : "32px",
        }}
      >
        <C.RankingInfos>
          <Title
            variant="secondary"
            style={{
              borderBottom: "1px solid #e2a141",
              textAlign: "left",
              paddingBottom: 12,
            }}
          >
            Ranking Nacional
          </Title>

          <Subtitle
            style={{
              color: tokens.colors.brand.light,
              textAlign: "left",
              lineHeight: "26px",
            }}
          >
            No ranking dos <strong>5 maiores devedores</strong> do país,{" "}
            <strong>São Paulo ocupa o 1º lugar</strong>, acumulando 33% da
            dívida nacional.
            <br />
            <br />
            Atualmente o Estado efetua o <span>pagamento</span> dos precatórios{" "}
            <span>com 14 anos de atraso.</span>
          </Subtitle>
        </C.RankingInfos>

        <C.RankingChart>
          <Doughnut
            data={chartData}
            width={320}
            style={{ marginTop: "30px" }}
            height={320}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                  rtl: true,
                  fullSize: true,
                  position: "left",
                  labels: {
                    color: "#EEE",
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
          />
        </C.RankingChart>
      </ContentBox>

      <ContentBox
        py={"60px"}
        contentStyle={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 2fr",
          gap: isMobile ? "60px" : "32px",
        }}
      >
        <div>
          <Title
            variant="tertiary"
            style={{
              textAlign: "left",
              marginBottom: 32,
            }}
          >
            Notícias
          </Title>

          <Subtitle
            style={{
              textAlign: "left",
              lineHeight: "32px",
            }}
          >
            Veja a seguir as notícias nos principais veículos da mídia (Folha de
            São Paulo, Estadão, Valor Investe, Gazeta, entre outros) e matérias
            dos maiores escritórios de advocacia.
            <br />
            <br />
            Os <strong>pagamentos</strong> que inicialmente deveriam ser
            realizados <strong>em SP até 2020</strong>, foram postergados para{" "}
            <strong>2024</strong> e novamente prorrogados para
            <strong>2029</strong>.
            <br />
            <br />
            As notícias abordam justamente os atrasos, a mudança constante na
            data limite de pagamento e a <strong>incerteza</strong> no{" "}
            <strong>recebimento</strong> dos precatórios, que vem{" "}
            <strong>prejudicando milhares de credores</strong>.
          </Subtitle>
        </div>

        <C.NewsList>
          {newsList.map((news, newsIndex) => (
            <Link
              key={news.id}
              href={{
                pathname: "news/" + news.title,
                query: { id: newsIndex },
              }}
            >
              <C.NewsItem key={news.id}>
                <C.NewsItemTop>
                  <C.NewsItemInfo>
                    {news.source} | {news.date.toString()}
                  </C.NewsItemInfo>
                  <C.NewsItemTitle>{news.title}</C.NewsItemTitle>
                </C.NewsItemTop>
                <C.NewsItemLink href={news.link} target="_blank">
                  Leia mais
                </C.NewsItemLink>
              </C.NewsItem>
            </Link>
          ))}
        </C.NewsList>
      </ContentBox>

      <div id="benefits" />
      <ContentBox py={"60px"} bgColor="#dbdbdb">
        <Title variant="primary">Por que vender seus precatórios?</Title>

        <C.WhyToSellList>
          {whyToSellList.map((why) => (
            <C.WhyToSellItem key={why.id}>
              <C.WhyToSellItemIcon>
                <SuccessIcon />
              </C.WhyToSellItemIcon>

              <Subtitle
                style={{
                  textAlign: "left",
                  lineHeight: "32px",
                }}
              >
                {why.text}
              </Subtitle>
            </C.WhyToSellItem>
          ))}
          <CtaButton>Quero vender meu precatório</CtaButton>
        </C.WhyToSellList>
      </ContentBox>

      <C.WhatContainer>
        <Title
          style={{
            marginBottom: 32,
          }}
          variant="tertiary"
        >
          Porquê investir em precatórios?
        </Title>

        <SpeechCarousel data={userList} />
      </C.WhatContainer>

      <ContentBox py={"60px"} bgColor={tokens.colors.neutral.highLight}>
        <Title variant="primary">
          Evolução de investimentos em precatórios{" "}
          <span style={{ fontSize: "18px" }}>(2018 - 2022)</span>
        </Title>

        <Chart />
      </ContentBox>

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
          A venda do precatório é realizada com muita segurança e agilidade,
          todo o procedimento é reconhecido em cartório e o ente público, o
          devedor, não se opõe a cessões de crédito, trata-se de um ato
          TOTALMENTE LEGAL.
          <br />
          <br />A CESSÃO É SEGURA, mas sempre deve ser realizada por uma empresa
          capacitada para analisar todos os processos e documentos necessários.
        </Description>
      </ContentBox>

      <ContentBox
        py={"60px"}
        bgColor="#323a40"
        contentStyle={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: "32px",
        }}
      >
        <div>
          <Title
            variant="secondary"
            style={{
              textAlign: "left",
              marginBottom: 32,
            }}
          >
            Somos especialistas em precatórios
          </Title>
          <Subtitle
            style={{
              color: tokens.colors.neutral.lowLight,
              textAlign: "left",
            }}
          >
            Preencha nosso formulário para{" "}
            <strong>vender seu precatório</strong> ou{" "}
            <strong>tirar dúvidas</strong>.<br />
            <br />
            <strong>Nosso time entrará em contato.</strong>
          </Subtitle>
        </div>
        <PurposeForm />
      </ContentBox>
    </>
  );
};

export default Precatory;
