import { Subtitle, Title } from "@/components"
import ContentBox from "@/components/ContentBox"
import { useDevice } from "@/hooks/useDevice"
import { tokens } from "@/utils/tokens"
import React from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import * as C from "./styles"
ChartJS.register(ArcElement, Tooltip, Legend)

const NationalRanking: React.FC = () => {
  const { isMobile } = useDevice()

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
    <ContentBox
      bgColor={tokens.colors.brand.cta}
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
          <strong>São Paulo ocupa o 1º lugar</strong>, acumulando 33% da dívida
          nacional.
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
  )
}

export default NationalRanking
