const express=require('express')
 const app =express()

 const PORT=process.env.PORT||3001;
 
 app.get("/",(req,res)=>{
    res.send("<h1>this is from Server</h1>")
 })

 app.listen(PORT,()=>{
    console.log('the server is running on the:',`${PORT}`);
 })