import React, { useEffect, useState } from 'react';
import axios from '../api/axios';


const Pestle = () => {
  const [maindata,setMainData] = useState([])
  const getData = ()=>{
    axios.post("/chart",{tag:"pestle"})
    .then(res=>setMainData(res.data))
    .catch(err=>console.log(err))
  };
  useEffect(()=>getData(),[]);
  console.log(maindata)
  
  return (
    <div className=' '>
    </div>
  )
}

export default Pestle