import React from 'react';
import { Line } from 'react-chartjs-2';
import '../styles/PatientDetails.css';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const BloodPressureChart = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.month),
    datasets: [
      {
        label: 'Systolic',
        data: data.map(entry => entry.blood_pressure.systolic.value),
        borderColor: 'pink',
        borderWidth: 2,
        pointBackgroundColor: 'pink',
        pointRadius: 3, // Adjust point radius
        tension: 0.4, // Adjust curve smoothness
      },
      {
        label: 'Diastolic',
        data: data.map(entry => entry.blood_pressure.diastolic.value),
        borderColor: 'purple',
        borderWidth: 2,
        pointBackgroundColor: 'purple',
        pointRadius: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Maintain aspect ratio
    scales: {
      x: {
        grid: {
          display: false, // Remove x-axis grid lines
        },
        ticks: {
          display: true, // Ensure ticks are displayed
          callback: (value) => {
            // Customize tick label formatting here
            return ''; // Return an empty string to hide the label
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          display: true, // Ensure ticks are displayed
          callback: (value) => {
            // Customize tick label formatting here
            return ''; // Return an empty string to hide the label
          }
        },
        grid: {
          display: true, // Keep y-axis grid lines
          color: '#f0f0f0', // Customize grid line color
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return <Line style={{width: '500px', backgroundColor: ''}} data={chartData} options={options} />;
}

export default BloodPressureChart;
