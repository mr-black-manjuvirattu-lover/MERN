import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import '../CSS/Signup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
  const Navigate=useNavigate()
  const[FirstName,setFirstName]=useState("")
  const[LastName,setLastName]=useState("")
  const[Email,setEmail]=useState("")
  const[Password,setPassword]=useState("")
  const[ConfirmPassword,setConfirmPassword]=useState("")
  const[PhoneNumber,setPhoneNumber]=useState(0)

  const handleSignup= async (e)=>{
    e.preventDefault()
    const req=await axios.post("https://mern-1nqn.onrender.com/signup",{
      FirstName:FirstName,
      LastName:LastName,
      Email:Email,
      Password:Password,
      PhoneNumber:PhoneNumber
    })
    
    const message=req.data.message
    const isSignup=req.data.isSignup
    if(isSignup){
      alert(message)
      Navigate('/login')
    }else{
      alert(message)
    }

  }
  return (
    <form action="" onSubmit={handleSignup}>
      
      <div className='Container'>
        <h1>SignUp Page</h1>
        FirstName : <input id="FirstName" value={FirstName} onChange={(e)=>setFirstName(e.target.value)} type="text" required/>
        LastName : <input id="LastName" value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" required/>
        Email : <input id="Email" value={Email} onChange={(e)=>setEmail(e.target.value)} type="text" required/>
        PhoneNumber : <input id="PhoneNumber" value={PhoneNumber} onChange={(e)=>setPhoneNumber(parseInt(e.target.value)||0)} type='number' required/>
        Password : <input id="Password" value={Password} onChange={(e)=>setPassword(e.target.value)} type="text" required/>
        Confirm Password : <input id="ConfirmPassword" value={ConfirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} type="text" required/>
        <button >Submit</button>
        <p>Already Have an Account ?<Link to='/login'>Login</Link></p>
      </div>
    </form>
    
  )
}

export default Signup