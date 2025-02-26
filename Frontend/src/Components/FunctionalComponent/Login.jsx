import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import '../CSS/Login.css'
const Login = () => {
  const Navigate=useNavigate()
  const [Email,setEmail]=useState("")
  const [Password,setPassword]=useState("")

  const handleLogin=async (e)=>{
    e.preventDefault()
    const req =await axios.post("https://mern-1nqn.onrender.com/login",{
      Email:Email,
      Password:Password
    })
    
    const message=req.data.message
    const isLoggedin=req.data.isLoggedin
    if(isLoggedin){
      alert(message)
      Navigate('/')
    }else{
      alert(message)
    }
  }

  return (
    <form action="" onSubmit={handleLogin}>
      <div className='Container'>
        <h1>Login Page</h1>
        Email : <input value={Email} onChange={(e)=>setEmail(e.target.value)} type="text" required/>
        Password : <input value={Password} onChange={(e)=>setPassword(e.target.value)} type="text" required/>
        <button>Login</button>
        <p>Not Have an Account?<Link to='/signup'>Signup</Link></p>
      </div>
      
    </form>
  )
}

export default Login