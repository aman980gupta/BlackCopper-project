import React, { useEffect } from 'react'
import { getProductAsync } from '../features/dummyapi/dummySlice';
import { useGetProdutsQuery } from '../features/dummyapi/dummyApiSlice';

const Topic = () => {
  const { data, error, isLoading } = useGetProdutsQuery();
  const Card = ({object}) =>{
    const {images,title,brand,category,description,id,price,rating,stock,thumbnail} = object
    return <div className="card">
    <img src={images[0]} alt={title} style={{width:"100%" }}/>
    <div className="container">
      <h2><b>{title}</b></h2>
      <h4><b>{brand}</b></h4>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  </div>
  }
  
  useEffect(() => {

  }, [data])
  console.log(data)
  return (
    <div>
      {isLoading ?
       <p>loading....</p> :
        data?.products.map((product)=>{
          return <Card object = {product}/>
        }) 
        }
      {/* {data ? <div>Topic</div>:null} */}

    </div>
  )
};
export default Topic;
