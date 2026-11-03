const mongoose = require("mongoose");

async function connectDB() {
    try {
        // await mongoose.connect(DB_URL);
        console.log("MongoDB Connected");
    }
    catch(err){
        console.error("MongoDB Connection Failed ❌");
    }
}

module.exports = connectDB;