const express = require("express");
const client = require("../db/mongoClint");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const createUserCollection = require("../schema/userSchema");
const env = require("dotenv").config();
const ObjectID = require('mongodb').ObjectId;

const login = asyncHandler(async (req,res)=>{
   try {
      const {password,email} = req.body;
      if(!email || !password  ){
         throw new Error("no email or pass")
      }
      console.log("login work and user email", email)
      res.status(201).json({email,password})
      // const collection = await client.db(process.env.MONGO_DB)
      // .collection(process.env.MONGO_COLLECTION_2).findOne({email});
      
      // if(collection){
      //    const isUser =  bcrypt.compare(password,collection.password);
      //   const token = jwt.sign({_id:collection._id},"jwtSecret",{expiresIn:"2d"})
      //   {isUser && res.cookie("token",token)}
      //   console.log(collection)
      //   res.json({...collection,password:undefined})
      // }
   } catch (error) {
      console.log(error)
      throw new Error(error)
      //res.status(401).json({msg:"no some thing wrong"})
   }
});
const register = asyncHandler(async (req,res)=>{
   try {
      const {first_name,last_name, password,email} = req.body;
      const hashedPassword = bcrypt.hashSync(password,10);

      const exits = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION_2).findOne({email});
      if(!exits){

         const collection = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION_2)
         .insertOne({first_name, last_name, password:hashedPassword, email })
         console.log(collection.insertedId)
         res.status(200).json({msg:`object inserted and object id is ${collection.insertedId}`})
      }else{res.status(400).json({msg:"user alraidy existe"})}
      
   } catch (error) {
      console.log(error)
      throw new Error(error)
   }
});
const verifyUser = asyncHandler(async (req,res,next)=>{
   const {token} = req.cookies;
   if (token){
      console.log(token)
      //res.status(200).json({token})
      next()
   }else{
      console.log("no token",token)
      //res.status(401).json({msg:"no token"})
      res.status(400).json({msg:"no token"})
   }
});
const profile= asyncHandler(async(req,res)=>{
   const token = req.cookies.token;
   // console.log("token in authroute",token)
   // res.cookie("token",token)
   // res.json({token})
   res.status(200).json({token})
});
const protect = asyncHandler(async(req,res,next) =>{
   const {token} = req.cookies;
   
   if (token) {
      try {
        const decoded = await jwt.verify(token, 'jwtSecret'); 
        console.log(decoded._id)
        const isUser = await client.db(process.env.MONGO_DB).collection(process.env.MONGO_COLLECTION_2).findOne({ "_id":new ObjectID(decoded._id)});
        //console.log('Token decoded:', decoded);
        
         if(isUser){
           console.log("protect worked")

            next()
         }else{res.status(500).json({msg:"invalid user"})}
        // Now you can use the decoded token for authentication and authorization
      } catch (error) {
        console.error('Token verification failed:', error);
        res.status(401)
        res.json({ message: 'Token verification failed:' });
      }
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
   
   
});




module.exports = {register,login,protect,verifyUser,profile}