import React from 'react'
import { Link } from 'react-router-dom'
// import '../CSS/Login.css'
const Login = () => {
  return (
    <form action="">
      <div className='Container'>
        <h1>Login Page</h1>
        Name : <input type="text" required/>
        Password : <input type="text" required/>
        <button>Login</button>
        <p>Not Have an Account?<Link to='/signup'>Signup</Link></p>
      </div>
      
    </form>
  )
}

export default Login