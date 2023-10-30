import React, { useEffect, useState } from 'react';
import axios from "../api/axios";

const Catagory = () => {
  const optionList = [
    "sector",
    "topic",
    "region",
    "country",
    "relevance",
    "pestle",
    "source",
    "likelihood"];
  const [catagoryData, setCatagoryData] = useState([]);
  const [selectedValue, setSelectedValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPageCount = Math.ceil(catagoryData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = catagoryData.slice(startIndex, endIndex);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    console.log(pageNumber)
  };
  const getData = (tag) => {
    axios.post("/catagory", { tag })
      .then(res => setCatagoryData(res.data))
      .catch(err => console.error(err))
  };
  useEffect(() => getData("sector"),[])
  useEffect(() => {
    setIsLoading(true)
    getData(selectedValue)
    setIsLoading(false )
  },[selectedValue])
    
  //console.log(catagoryData);
  console.log(selectedValue)

  return (<>
  {isLoading ? <div>Loading</div> :
  
    <div className='w-full relative h-full flex justify-center items-center'>
      <div className='absolute top-6 right-10'>
        <label htmlFor="selectOption">Select an option:</label>
        <select id="selectOption"
         name="selectOption"
          className='border border-solid border-[#ccc] outline-none'
          value={selectedValue}
          onChange={(e)=>{
            setSelectedValue(e.target.value);
            setCurrentPage(1)
          }}
          >
          {optionList.map(elm => <option key={elm} value={elm}>{elm}</option>)}
        </select>
      </div>
      <section className='flex flex-col '>
        <div className='grid grid-cols-3'>
        {currentData.map((elem,i)=><div className='col-span-1 row-span-1 border ' key={i}>s.n. {startIndex + i+1} : {elem._id}</div>)}
        </div>
        <div className='flex justify-around items-center'>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
          >
          Previous
        </button>
          <span>Page {currentPage} of {totalPageCount}</span>
        <button
          disabled={currentPage === totalPageCount}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
      </section>
    </div>
    }
    </>
  )
}

export default Catagory;