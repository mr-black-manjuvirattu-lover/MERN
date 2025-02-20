import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Signup.css'
const Signup = () => {
  return (
    <form action="">
      
      <div className='Container'>
        <h1>SignUp Page</h1>
        Name : <input type="text" />
        Email : <input type="text" />
        Password : <input type="text" />
        Confirm Password : <input type="text" />
        <button>Submit</button>
        <p>Already Have an Account ?<Link to='/login'>Login</Link></p>
      </div>
    </form>
    
  )
}

export default Signup