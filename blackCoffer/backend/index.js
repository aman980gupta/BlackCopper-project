const express = require("express");
const bodyParser = require("body-parser")
const env = require("dotenv").config()
const PORT = process.env.PORT
const authRoute = require("./routes/authRoute")
const cookieParser = require("cookie-parser")

const app = express();
app.use(cookieParser())
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use("/",authRoute);


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

