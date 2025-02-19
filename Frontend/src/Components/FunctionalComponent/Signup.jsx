import React from 'react'
import '../CSS/Signup.css'
const Signup = () => {
  return (
    <form action="">
      <div className='Container'>
        Name : <input type="text" />
        Email : <input type="text" />
        Password : <input type="text" />
        Confirm Password : <input type="text" />
        <button>Submit</button>
      </div>
    </form>
    
  )
}

export default Signup