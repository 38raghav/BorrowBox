const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/BorrowBox");
        console.log("MongoDB Connected");
    }
    catch(err){
        console.error("MongoDB Connection Failed ❌");
    }
}

module.exports = connectDB;