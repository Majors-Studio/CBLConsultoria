import { Subtitle, Title } from "@/components";
import ContentBox from "@/components/ContentBox";
import { useDevice } from "@/hooks/useDevice";
import { tokens } from "@/utils/tokens";
import React from "react";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  ChartData,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import * as C from "./styles";
ChartJS.register(ArcElement, Tooltip, Legend);

const NationalRanking: React.FC = () => {
  const { isDesktop } = useDevice();

  const chartData = {
    labels: ["RJ", "PR", "SP", "RS", "União"],
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
  } as ChartData<"doughnut", number[], string>;

  return (
    <ContentBox
      bgColor={tokens.colors.brand.cta}
      contentStyle={{
        display: "grid",
        gridTemplateColumns: !isDesktop ? "1fr" : "1fr 1fr",
        gridGap: !isDesktop ? tokens.space.sizeXl : "32px",
      }}
    >
      <C.RankingInfos>
        <Title
          variant="secondary"
          style={{
            borderBottom: "1px solid "+ tokens.colors.brand.lightCream,
            textAlign: "left",
            paddingBottom: 12,
          }}
        >
          Ranking Nacional
        </Title>

        <Subtitle
          style={{
            color: tokens.colors.neutral.highPure,
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
          width={!isDesktop ?  250 : 320}
          height={!isDesktop ? 250 : 320}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: true,
                fullSize: true,
                
                title: {
                  display: true,
                  text: 'Estados que possuem mais precatórios',
                  position: 'center',
                  padding: 20,
                  color: tokens.colors.neutral.highPure,
                  font: {
                    size: !isDesktop ? 16 : 20,
                    weight: '500',
                    family: tokens.font.family.primary,
                  },
                },
                position: 'bottom',
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
  );
};

export default NationalRanking;
