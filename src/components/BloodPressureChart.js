import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.month),
    datasets: [
      {
        label: 'Systolic',
        data: data.map(entry => entry.blood_pressure.systolic.value),
        borderColor: '#ff6384',
        backgroundColor: '#ff6384',
        fill: false,
      },
      {
        label: 'Diastolic',
        data: data.map(entry => entry.blood_pressure.diastolic.value),
        borderColor: '#36a2eb',
        backgroundColor: '#36a2eb',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Blood Pressure Over Time',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default BloodPressureChart;
