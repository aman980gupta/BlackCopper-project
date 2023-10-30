const express = require("express");
const cors = require("cors");
const {register, login, protect,verifyUser,profile} =require("../controllers/authController") ;
const { readingData,getTabelData, catagoryData,chartData,findUser } = require("../controllers/chartController")

const router = express.Router();
router.use(cors({
    origin: 'http://localhost:3000',
}));

router.get("/",(req,res)=>{
    res.json({name:"AMAN GUPTA"})
});
router.get("/db",readingData);
router.post("/chart",chartData);
router.post("/table",getTabelData);
router.post("/catagory",catagoryData);
router.post("/register",register);
router.post("/login",login);
router.get("/logOut",(req,res)=>{
    res.cookie("token","",{expires:new Date(0)})
    res.status(201).json({msg:"logOut"})
});
router.post("/refresh",(req,res)=>{
    //res.cookie("token","token",{expires:new Date(0) + 60*60*1000})
    res.status(201).json({token:"token"})
});
router.get("/findUser",findUser);
router.route("/profile").get(protect,profile);
module.exports = router;