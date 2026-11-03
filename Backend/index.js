const express = require("express");
const User = require("./Models/user.model.js");
const connectDB = require("./config/connectDB.js");
const app = express();





app.listen(8080,()=>{
    console.log("Server start on port 8080");
})