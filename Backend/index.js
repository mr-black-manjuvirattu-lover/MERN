const express=require('express')
const mdb =require("mongoose")
const dotenv=require("dotenv")
const bcrypt=require("bcrypt")
const Signup=require("./models/SignupSchema")
const app =express()
app.use(express.json())
dotenv.config()

const PORT=process.env.PORT||3001;
 
mdb.connect(process.env.MONGODB_URL).then(()=>{
   console.log("DB Connection Successfull");
}).catch((err)=>{
   console.log("error :",err);
})

 app.get("/",(req,res)=>{
    res.send("<h1>this is from Server</h1>")
 })
 app.get("/about",(req,res)=>{
   res.send("<h1>this is from About</h1>")
})

app.post("/signup", async (req,res)=>{
   try{
      const {FirstName,LastName,Email,Password,PhoneNumber}=req.body
      const hashedPassword= await bcrypt.hash(Password,10)
      const newSignup =new Signup({
         FirstName:FirstName,
         LastName:LastName,
         Email:Email,
         Password:hashedPassword,
         PhoneNumber:PhoneNumber
      });
      await newSignup.save();
      
      console.log("Signup Successful");
      res.status(201).json({message: "Signup Successful",isSignup:true})
   }catch{
      res.status(201).json({message:"signup unSuccessful",isSignup:false})  
   }
})

 app.listen(PORT,()=>{
    console.log('the server is running on the:',`${PORT}`);
 })