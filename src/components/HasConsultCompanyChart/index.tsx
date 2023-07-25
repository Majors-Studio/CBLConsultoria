import { tokens } from '@/utils/tokens';
import React from 'react';
import { Bar } from 'react-chartjs-2';

const HasConsultCompanyChart: React.FC = () => {
  const data = {
    labels: ['Precisam de consultoria', 'Têm consultoria'],
    datasets: [
      {
        label: 'Empresas no Brasil',
        data: [500, 350], // Valores fictícios para a quantidade de empresas
        backgroundColor: [tokens.colors.chart[3], tokens.colors.chart[4]], // Cores das barras
        borderWidth: 0,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default HasConsultCompanyChart;