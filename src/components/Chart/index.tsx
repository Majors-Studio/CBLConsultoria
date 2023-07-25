import React from "react";
import { Bar } from "react-chartjs-2";

import * as C from "./styles";

import { ChartData, Chart as ChartJS, registerables } from "chart.js/auto";
import { tokens } from "@/utils/tokens";

const Chart: React.FC = () => {
  ChartJS.register(...registerables);

  const data = {
    labels: ["2018", "2019", "2020", "2021", "2022"],
    datasets: [
      {
        data: [36.6, 41.3, 51.9, 54.7, 89.1],
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
  } as ChartData<"bar", number[], string>;

  return (
    <C.ChartContainer>
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
          datasets: {
            bar: {
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              hoverBorderColor: "rgba(0,0,0,0.5)",
              hoverBorderWidth: 1,
              borderSkipped: "bottom",
            },
          },
          elements: {
            bar: {
              borderWidth: 1,
              borderColor: "rgba(0,0,0,0.2)",
              hoverBorderColor: "rgba(0,0,0,0.5)",
              hoverBorderWidth: 2,
              borderSkipped: "bottom",
            },
          },
          resizeDelay: 50,
          devicePixelRatio: 2,
          skipNull: true,
          locale: "pt-BR",
          normalized: true,
          responsive: true,
          // legendas
          plugins: {
            legend: {
              fullSize: true,
              rtl: true,
              display: false,

              position: "bottom",
              labels: {
                color: "#000",
                font: {
                  size: 14,
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
