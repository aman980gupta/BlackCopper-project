import React from 'react'
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,LineElement,Point, PointElement} from 'chart.js'; 
import { Bar, Line } from 'react-chartjs-2';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,PointElement,Legend,LineElement);
const LineAndBar = ({mainData,labels}) => {

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
  labels,
  datasets: [
    {
      type: 'bar', // Use 'bar' type for the bar dataset
      label: 'Bar Dataset',
      backgroundColor: '#14e6e780',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
      data: mainData,
    },
    {
      type: 'line', // Use 'line' type for the line dataset
      label: 'Line Dataset',
      fill: false,
      borderColor: 'black',
      data:mainData,
    },
  ],
};

  return (
    <div className='w-full p-2 h-full flex justify-center items-center'> 
  

      <Bar data={data} options={options} />

    
    </div>
  )
} 

export default LineAndBar;