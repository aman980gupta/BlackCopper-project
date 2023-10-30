import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend, ArcElement} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,ArcElement);


const Dounut = ({dataList}) => {
    const data = {
        labels: dataList.map(ele=>ele._id),
        datasets: [
          {
            data: dataList.map(ele=>ele.count),
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#GGCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56','#GGCE56'],
          },
        ],
      };
  return (
    <Doughnut data={data} />
  )
}

export default Dounut