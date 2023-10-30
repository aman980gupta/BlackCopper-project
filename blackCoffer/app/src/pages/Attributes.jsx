import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,LineElement,Point, PointElement} from 'chart.js'; 
import { Bar, Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,PointElement,Legend,LineElement);
const Attributes = ({mainData}) => {
const options = {
  scales: {
    x: {
      stacked: true, // Stacked bar chart
    },
    y: {
      beginAtZero: true,
    },
  },
};
const data = {
  labels: ['January', 'February', 'March', 'April', 'May'],
  datasets: [
    {
      type: 'bar', // Use 'bar' type for the bar dataset
      label: 'Bar Dataset',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: mainData,
    },
    {
      type: 'line', // Use 'line' type for the line dataset
      label: 'Line Dataset',
      fill: false,
      borderColor: 'rgba(255, 99, 132, 1)',
      data: mainData,
    },
  ],
};

  return (
    <div className='w-full p-2 h-full flex justify-center items-center'> 
    <div>
      <h2>Stacked Bar Chart</h2>
      <Bar data={data} options={options} />
    </div>
    </div>
  )
}

export default Attributes;












