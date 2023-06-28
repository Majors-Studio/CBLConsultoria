import React from "react";
import { Bar } from "react-chartjs-2";

import * as C from "./styles";

import { Chart as ChartJS, registerables } from "chart.js/auto";

const Chart: React.FC = () => {
  ChartJS.register(...registerables);

  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Evolução dos precatórios em R$ (Bilhões)",
        data: [36.6, 41.3, 51.9, 54.7, 89.1],
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    // criar um gráfico da evolução dos precatórios nos últimos anos
    <C.ChartContainer>
      <Bar
        data={data}
        width={400}
        height={200}
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          // legendas
          plugins: {
            title: {
              display: true,
              text: "Evolução dos precatórios em R$ (Bilhões)",
              color: "#000",
              font: {
                size: 20,
              },
            },
            legend: {
              display: true,
              position: "bottom",

              labels: {
                color: "#000",

                font: {
                  size: 16,
                },
              },
            },
            // tooltip
          },
        }}
      />
    </C.ChartContainer>
  );
};

export default Chart;
