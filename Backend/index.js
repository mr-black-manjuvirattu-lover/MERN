const express=require('express')
const mdb =require("mongoose")
const dotenv=require("dotenv")
const bcrypt=require("bcrypt")
const Signup=require("./models/SignupSchema")
const cors=require("cors")
const app =express()
app.use(cors())
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

app.get("/getsignupdet",async (req,res)=>{
   const signup=await Signup.find()
   console.log(signup)
   res.send("Signup fetched")
})

app.post("/login",async (req,res)=>{ 
   try{
      const {Email,Password}=req.body
      const existingUser =await Signup.findOne({Email:Email})
      console.log(existingUser)
      if(existingUser){
         console.log("entered")
         const isValidPassword=await bcrypt.compare(Password,existingUser.Password)
         console.log(isValidPassword)
         if(isValidPassword){
            res.status(201).json({message:"Login Successfully",isLoggedin:true})
         }else{
            res.status(201).json({message:"enter Valid Password",isLoggedin:false})
         }
      }else{
         res.status(201).json({message:"User Not Found",isLoggedin:false})
      }
   }catch(error){
      console.log("error occured")
   }
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