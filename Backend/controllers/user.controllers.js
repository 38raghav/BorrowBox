const User = require("../Models/user.model.js");
const bcrypt = require('bcrypt');


async function signup(req,res){
    const {username,email,password} = req.body;
    console.log(email + " "+ password);
    
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message : "User alrady exists"});
        }
        
        const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({
            name : name,
            email : email,
            password : hashedPassword
        })
        
        res.status(201).json({
            message : "User Registered"
        })
    }
    catch(error){
        res.status(500).json({message : `Something went Wrong ${error}`});
    }
} 




async function login(req,res){
    const {email,password} = req.body;
    console.log(email +" "+ password);
    res.end();

    try{
        const existingUser = await User.findOne({email});
        if(!existingUser){
            return res.status(404).json({
                message : "User does not Exist in DB"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password,existingUser.password);
        
        if(!isPasswordCorrect){
            return res.status(401).json({message : "Wrong Password"});
        }

        return res.status(201).json({
            message : "Login Successful!"
        })

    }

    catch(error){
        return res.status(500).json({ message: `Login error: ${error.message}` });
    }
}


module.exports = {signup,login};