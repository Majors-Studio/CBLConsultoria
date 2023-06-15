import React from "react"
import * as C from "@/styles/precatory"
import BrazilGraph from "@/assets/svg/BrazilGraph"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from "chart.js"
import { Doughnut } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

const Precatory: React.FC = () => {
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
  } as ChartData<"doughnut", number[], string>
  
  return (
    <>
      <C.ContainerImg>
        <C.BannerImage src="https://source.unsplash.com/featured" alt="bg" />
        <C.ContainerText>teste</C.ContainerText>
      </C.ContainerImg>

      <C.WhatIs>
        <C.WhatIsContent>
          <C.WhatIsQuestion>O que é um precatório?</C.WhatIsQuestion>
          <C.WhatIsAnswerContainer>
            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Precatórios são requisições de pagamento expedidas pelo Judiciário
              para cobrar de municípios, estados ou da União, assim como de
              autarquias, fundações e universidades, o pagamento de valores
              devidos após condenação judicial definitiva.
            </C.WhatIsAnswer>

            <C.WhatIsAnswer style={{ marginBottom: 42 }}>
              Estas ações dividem-se em duas categorias:
            </C.WhatIsAnswer>

            <C.WhatIsCategories style={{ marginBottom: 42 }}>
              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Comuns</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Desapropriação, tributações, entre outros (para pessoas
                  jurídicas é muito comum).
                </C.WhatIsAnswer>
              </C.WhatIsCategory>

              <C.WhatIsCategory>
                <C.WhatIsCategoryTitle>Alimentares</C.WhatIsCategoryTitle>
                <C.WhatIsAnswer>
                  Originam de questões salariais, pensões, aposentadorias,
                  verbas de sustento em geral, entre outros.
                </C.WhatIsAnswer>
              </C.WhatIsCategory>
            </C.WhatIsCategories>

            <C.WhatIsAnswer>
              O pagamento dos precatórios obedece uma ordem cronológica e uma
              ordem de prioridade. Porém o pagamento da dívida é extremamente
              moroso e incerto.
            </C.WhatIsAnswer>
          </C.WhatIsAnswerContainer>
        </C.WhatIsContent>
      </C.WhatIs>

      <C.CenaryContainer>
        <C.CenaryContent>
          <C.CenaryTitle>
            Cenário da Dívida Nacional em Precatórios
          </C.CenaryTitle>

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
                <a href="https://www.cnj.jus.br/pagamento-de-precatorios/">
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
        </C.CenaryContent>
      </C.CenaryContainer>

      <C.RankingContainer>
        <C.RankingContent>
          <C.RankingInfos>
            <C.RankingTitle>Ranking Nacional</C.RankingTitle>

            <C.RankingText>
              No ranking dos <span>5 maiores devedores</span> do país,{" "}
              <span>São Paulo ocupa o 1º lugar</span>, acumulando 33% da dívida
              nacional.
            </C.RankingText>

            <C.RankingText>
              Atualmente o Estado efetua o <span>pagamento</span> dos
              precatórios <span>com 14 anos de atraso.</span>
            </C.RankingText>
          </C.RankingInfos>

          <C.RankingChart>
            <Doughnut
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                  
                },
              }}
            />
          </C.RankingChart>
        </C.RankingContent>
      </C.RankingContainer>
    </>
  )
}

export default Precatory
