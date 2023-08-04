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
import { useDevice } from "@/hooks/useDevice"

const MistakesChart: React.FC = () => {
  const { isDesktop } = useDevice()
  const chartData = {
    labels: ["Imóveis Desregularizados", "Imóveis Regularizados"],
    datasets: [
      {
        label: "Valor em %",
        data: [60, 40],
        backgroundColor: [tokens.colors.chart[0], tokens.colors.chart[1]],
        borderWidth: 0,
      },
    ],
  } as ChartData<"pie", number[], string>
  return (
    <Pie
      data={chartData}
      width={400}
      height={"100%"}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: "Taxa de imóveis desregularizados no Brasil nos últimos anos",
            font: {
              size: !isDesktop ? 18 : 24,
              weight: "normal",
            },
            padding: {
              bottom: 24,
            },
          },
          legend: {
            display: true,
            position: "left",
            maxWidth: 300,
            labels: {
              color: tokens.colors.brand.dark,
              font: {
                size: !isDesktop ? 12 : 18,
              },
            },
          },
        },
      }}
    />
  )
}

export default MistakesChart
