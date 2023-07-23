import React from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import * as S from "./styles"

ChartJS.register(ArcElement, Tooltip, Legend)

const MistakesChart: React.FC = () => {
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
    <S.Container>
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
    </S.Container>
  )
}

export default MistakesChart
