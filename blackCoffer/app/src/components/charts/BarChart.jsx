import { Bar } from 'react-chartjs-2';
import {Chart as ChartJS,CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend,} from 'chart.js';
ChartJS.register(CategoryScale,LinearScale,BarElement,Title,Tooltip,Legend);

const BarChart = ({listData,datasetsData}) => {
  const data = {
    labels:listData,
    datasets: [
      {
        label: 'Data',
        data: datasetsData,
        backgroundColor: ['rgba(75, 192, 192, 0.6)',"red","blue"],
      },
    ],
  };
  
  return <div className="w-full h-full flex justify-center items-center m-auto">
    <Bar data={data}  />
  </div>;
}

export default BarChart

// const [userData,setUserData] = useState({
//   labels:[1,2,3,4,5,6],
//   datasets: [
//     {
//       label: 'Dataset 1',
//       data: [7,4,5,1,2,9],
//     },
//   ],
// });  [...new Set(jsonData.map(elm=>elm.topic))]
// const listForData = data.map(elm=>elm.topic) [...new Set(jsonData.map(elm=>elm.pestle))]
// const newList = [...new Set(listForData)]
// console.log(newList) data.map(elm=>elm.topic)
// const filtelListData = (list,data)=>{
//   let newLIstFOrChart =[]
// for (let index = 0; index < listData.length; index++) {
//   if(listData[index]===jsonData.)
//   const element = listData[index];
  
// }
// }