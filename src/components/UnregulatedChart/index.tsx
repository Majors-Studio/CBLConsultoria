import React from "react"
import { Bar } from "react-chartjs-2"
import { ChartData, Chart as ChartJS, registerables } from "chart.js/auto"

import * as S from "./styles"
import { tokens } from "@/utils/tokens"

const UnregulatedChart: React.FC = () => {
  ChartJS.register(...registerables)

  const data = {
    labels: ["2017", "2019"],
    datasets: [
      {
        data: [26000, 1300000],
        backgroundColor: [
          tokens.colors.chart[0],
          tokens.colors.chart[1],
        ],
        borderWidth: 0,
      },
    ],
  } as ChartData<"bar", number[], string>
  return (
    <S.Container>
      <Bar
        data={data}
        width={400}
        height={200}
        options={{
          indexAxis: "y",
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          resizeDelay: 50,
          devicePixelRatio: 2,
          locale: "pt-BR",
          normalized: true,
          responsive: true,
          plugins: {
            title: {
              display: true,
              text: "Erros médicos no Brasil nos últimos anos",
              align: "center",
              position: 'top',
              padding: {
                bottom: 24,
              },
              font: {
                size: 18,
                weight: "normal",
              },
              color: "#fff",
            },
            legend: {
              display: false,
              
            }
          },
        }}
      />
    </S.Container>
  )
}

export default UnregulatedChart
