import React, { useEffect, useState } from 'react'
import LineAndBar from '../components/charts/LineAndBar';
import axios from "../api/axios";

const Profile = () => {
  const [data,setData] = useState([]); 
  const getData = () =>{
    axios.get("/login/profile").then(res=>setData(res.data))
    .catch(err=>console.log(err))
  };
  console.log(data)
  useEffect(()=>getData(),[]);
  return (
    <div className='w-full h-full flex justify-center items-center'>
      this is profile 
    </div>
  )
}

export default Profile