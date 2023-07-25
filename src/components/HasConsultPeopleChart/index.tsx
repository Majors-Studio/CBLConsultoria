import { tokens } from "@/utils/tokens"
import { ChartData } from "chart.js"
import React from "react"
import { Bar } from "react-chartjs-2"

const HasConsultPeopleChart: React.FC = () => {
  const data = {
    labels: ["Precisam de consultoria", "Têm consultoria"],
    datasets: [
      {
        label: "Pessoas no Brasil",
        data: [15000, 8000], // Valores fictícios para a quantidade de pessoas
        backgroundColor: [tokens.colors.chart[0], tokens.colors.chart[1]], // Cores das barras
        borderWidth: 0,
        animation: {
          duration: 2000,
          easing: "easeInOutQuad",
        },
      },
    ],
  } as ChartData<"bar", number[], string>

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  return <Bar data={data} options={options} />
}

export default HasConsultPeopleChart
