const express = require("express");
const User = require("./Models/user.model.js");
const connectDB = require("./config/connectDB.js");
const {signup,login} = require("./controllers/user.controllers.js");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();



app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("<h1>Home Route</h1>");
})


app.post("/borrowbox/login",login);
app.post("/borrowbox/signup",signup);


app.listen(8080,()=>{
    console.log("Server start on port 8080");
})