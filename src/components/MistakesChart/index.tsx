import React from "react"
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

import * as S from "./styles"
import { tokens } from "@/utils/tokens";

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
  } as ChartData<"pie", number[], string>
  return (
    <S.Container>
      <Pie
        data={chartData}
        width={500}
        style={{ marginTop: "30px" }}
        height={500}
        options={{
          responsive: true,
          
          maintainAspectRatio: false,
          plugins: {
            title: {
              text: "Erros médicos no Brasil nos últimos anos",
              position: "top",
              display: true,
              color: tokens.colors.brand.light,
              padding: {
                  bottom: 12,
              },
              font: {
                size: 24,
                weight: "500",
                family: tokens.font.family.primary,
              }
            },
            legend: {
              display: true,
              rtl: true,
              fullSize: true,
              position: "bottom",
              labels: {
                color: "#EEE",
                font: {
                  size: 18,
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
