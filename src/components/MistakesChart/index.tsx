import React from "react"
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js"
import { Pie } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend)

import { tokens } from "@/utils/tokens"

const MistakesChart: React.FC = () => {
  const chartData = {
    labels: [
      "Diagnóstico Errado",
      "Erro Cirúrgico",
      "Medicação Incorreta",
      "Comunicação Deficiente",
      "Infecções Hospitalares",
    ],
    datasets: [
      {
        label: "Valor em %",
        data: [5, 4, 33, 9, 25],
        backgroundColor: [
          tokens.colors.chart[0],
          tokens.colors.chart[1],
          tokens.colors.chart[2],
          tokens.colors.chart[3],
          tokens.colors.chart[4],
        ],

        borderWidth: 0,
      },
    ],
  } as ChartData<"pie", number[], string>
  return (
    <Pie
      data={chartData}
      width={"100%"}
      height={"100%"}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            text: "Erros médicos no Brasil nos últimos anos",
            position: "top",
            display: true,
            color: tokens.colors.neutral.highPure,

            font: {
              size: 16,
              weight: "500",
              family: tokens.font.family.primary,
            },
          },
          legend: {
            display: true,
            fullSize: true,
            position: "left",

            labels: {
              color: "#EEE",
              font: {
                size: 12,
              },
            },
          },
        },
      }}
    />
  )
}

export default MistakesChart
