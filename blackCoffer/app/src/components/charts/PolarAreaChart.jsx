import React from 'react';
import { Chart as ChartJs ,RadialLinearScale,ArcElement,Title,Tooltip } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
ChartJs.register(RadialLinearScale,ArcElement,Title,Tooltip)
function PolarAreaChart({mainData,labels}) {
const data = {
  labels,
  datasets: [
    {
      data:mainData,
      backgroundColor: ['rgba(255, 99, 132, 0.6)', 'rgba(75, 192, 192, 0.6)', 'rgba(255, 205, 86, 0.6)', 'rgba(54, 162, 235, 0.6)'],
      borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 205, 86, 1)', 'rgba(54, 162, 235, 1)'],
      borderWidth: 1,
    },
  ],
};

const options = {
    responsive:true,
  scales: {
    r: {
      angleLines: {
        display: false, // Hide angle lines
      },
      suggestedMin: 0, // Set the minimum value for the radial axis
      suggestedMax: 50, // Set the maximum value for the radial axis
    },
  },
  plugins: {
    legend: {
      display: false, // Hide legend
    },
  },
  elements: {
    point: {
      radius: 0, // Hide data points
    },
  },
  layout: {
    padding: {
      left: 0, // Adjust as needed
      right: 0, // Adjust as needed
      top: 0, // Adjust as needed
      bottom: 0, // Adjust as needed
    },
  },
  animation: {
    animateRotate: false, // Disable animation for rotation
    animateScale: false, // Disable animation for scaling
  },
  plugins: {
    tooltip: {
      callbacks: {
        label: (context) => {
          const label = context.label || '';
          const dataset = context.dataset || {};
          const value = dataset.data && dataset.data[context.dataIndex];
          return `${label}: ${value}`;
        },
      },
    },
  },
};


  return (
    <div>
      <h2>Polar Area Chart with Centered Point Labels</h2>
      <PolarArea data={data} options={options} />
    </div>
  );
}

export default PolarAreaChart;
