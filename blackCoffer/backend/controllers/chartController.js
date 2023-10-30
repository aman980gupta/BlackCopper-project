const express = require("express");
const client = require("../db/mongoClint");
const env = require("dotenv").config();
const asyncHandler = require("express-async-handler");
const ObjectID = require('mongodb').ObjectId;

const chartData = asyncHandler(async (req, res) => {
   try {
      const { tag } = req.body;
      const data = await client.db(process.env.MONGO_DB)
      .collection(process.env.MONGO_COLLECTION)
      .aggregate([{$group:{_id:`$${tag}`,count : {"$sum":1}}}]).toArray()
      res.json(data);
   } catch (error) {
      console.log(error)
   }

});

const catagoryData = asyncHandler(async (req, res) => {
   try {
      const { tag } = req.body;
      const data = await client.db(process.env.MONGO_DB)
      .collection(process.env.MONGO_COLLECTION)
      .aggregate([{$group:{_id:`$${tag}`,count : {"$push":"$$ROOT"}}}]).toArray()
      res.json(data);
   } catch (error) {
      console.log(error)
   }

});
const readingData = async(req,res)=>{
   const collection = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION).find({"pestle": "Industries"}).toArray();
   res.json(collection)
};
const getTabelData = asyncHandler(async(req,res)=>{
   const {currentPage} = req.body;
   const itemsPerPage = 8;
   const startIndex = (currentPage-1) * itemsPerPage;
   const collection = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION).aggregate([
      { $skip: startIndex},{ $limit: itemsPerPage }]).toArray();
   const collectionLength = (await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION).aggregate([{$group:{_id:null,count : {"$sum":1}}}]).toArray());
   const totalPageCount = Math.ceil(collectionLength[0].count / itemsPerPage);
   res.json({collection,currentPage:currentPage+1,totalPageCount})
});
const findUser = asyncHandler(async(req,res)=>{
   const {token} = req.cookies;
   console.log(token)
   
   const collection = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION_2).findOne({"_id":new ObjectID ("652d0932cd18fab684777659")});
   
   res.json(collection)
});

// const insertingData = async(req,res)=>{
//    const collection = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION).insertMany(jsonData);
//    console.log("inserted")
//    res.send("inserted data")
// };
module.exports = { readingData,getTabelData,catagoryData,chartData,catagoryData,readingData,getTabelData,findUser };
//tagName, tagValue