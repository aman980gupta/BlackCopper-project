import React, { useEffect, useState } from 'react';
import axios from "../api/axios";

const About = () => {
  const headerList = [
    "sector",
    "topic",
    "region",
    "country",
    "relevance",
    "pestle",
    "source",
    "likelihood"];
  const [jsonData,setJsonData] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [totalPageCount,setTotalPageCount] = useState(1);
  const tabelData = () =>{
    axios.post("/table",{currentPage}).then(res=>{
      setJsonData([...res.data.collection])
      setTotalPageCount(res.data.totalPageCount)
    })
    .catch(err=>console.log(err))
  };
  useEffect(()=>tabelData(),[currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  //console.log(jsonData)
  return (
    <div className="container min-h-[89%]">

      <table className="w-full h-[85%] table-auto  overflow-y-auto">
        {/* Table Header */}
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="px-4 py-2 cursor-pointer">sr.</th>
            {headerList.map((ele, i) => {
              return <th className="px-4 py-2 cursor-pointer" key={i} onClick={() => { }}>
                {ele}
              </th>
            })}
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className='max-h-[80%]'>
          {jsonData?.map((item, i) => (
            <tr key={i} className="hover:bg-gray-100">
              <td className="border px-4 py-2">{(currentPage-1)*8 +i + 1}</td>
              {/* <td className="border px-4 py-2">{item.intensity}</td> */}
              <td className="border px-4 py-2">{item.sector}</td>
              <td className="border px-4 py-2">{item.topic}</td>
              {/* <td className="border px-4 py-2">{item.insight}</td> */}
              <td className="border px-4 py-2">{item.region}</td>
              {/* <td className="border px-4 py-2">{item.impact}</td> */}
              <td className="border px-4 py-2"><small>{item.country}</small></td>
              <td className="border px-4 py-2">{item.relevance}</td>
              <td className="border px-4 py-2">{item.pestle}</td>
              <td className="border px-4 py-2"><small>{item.source}</small></td>
              {/* <td className="border px-4 py-2">{item.title}</td> */}
              <td className="border px-4 py-2">{item.likelihood}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='w-full flex p-3 items-center justify-around'>
        <button className='border border-solid border-x-sky-950 p-1 px-2 rounded-lg'
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          >
          Previous
        </button>
          <span>Page {currentPage} of {totalPageCount}</span>
        <button className='border border-solid border-x-sky-950 p-1 px-2 rounded-lg'
          disabled={currentPage === totalPageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default About;

