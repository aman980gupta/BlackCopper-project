import React, { useEffect, useState } from 'react';
import axios from "../api/axios";
// import BarChart from '../comonents/BarChart';
// import LineAndBar from '../comonents/charts/LineAndBar';
// import PolarAreaChart from '../comonents/charts/PolarAreaChart';
const headerList = [
  "sector",
  "topic",
  "region",
  "country",
  "relevance",
  "pestle",
  "source",
  "likelihood"];

const Home = () => {
  // const [selectedValue, setSelectedValue] = useState(headerList[0]);
  // const [barChartData, setBarChartData] = useState([])
  // const getData = (tag) => {
  //   axios.post("/chart", { tag }).then(res => setBarChartData(res.data))
  //     .catch(err => console.error(err))
  //}
  // useEffect(() => getData(selectedValue), [selectedValue])
  // console.log(barChartData)
  return (
    <div className='w-full p-2 h-full flex flex-1 justify-center items-center bg-hero-pattern bg-center'>this is home</div>
  )
}

export default Home;

{/* <div className='w-full p-2 h-full flex relative'>
      <div className='absolute top-6 right-10'>
        <label htmlFor="selectOption">Select an option:</label>
        <select id="selectOption"
          name="selectOption"
          className='border border-solid border-[#ccc] outline-none'
          value={selectedValue}
          onChange={(e) => setSelectedValue(e.target.value)}
        >
          {headerList?.map(elm => <option key={elm} value={elm}>{elm}</option>)}
        </select>
      </div>
      <section className='w-[60%] h-[55%] '>
        <h2 className='font-bold font-sans'>{selectedValue} chart</h2>
        <LineAndBar
          mainData={barChartData?.map(elm => elm.count)}
          labels={barChartData?.map(elm => elm._id)} />
        <BarChart listData={barChartData?.map(elm => elm._id)}
         datasetsData={barChartData?.map(elm => elm.count)} /> 
      </section>
      <aside className='h-full flex justify-center items-center content-center flex-wrap'>
        <PolarAreaChart mainData={barChartData?.map(elm => elm.count)}
         labels={barChartData?.map(elm => elm._id)}/>
      </aside>
    </div> */}