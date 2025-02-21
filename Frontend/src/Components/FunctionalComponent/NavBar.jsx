import '../CSS/NavBar.css'
import React, { useState } from 'react'
import {Link } from 'react-router-dom'
const NavBar = () => {
  const [drop,setDrop]=useState(false)
  return (
    
    <header>
        <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <div className='dropDown' onMouseEnter={()=>setDrop(true)} onMouseLeave={()=>setDrop(false)}>
                  <span className='link'>Hooks</span>
                  {
                    drop&&(<ol className='drag'>
                    <li>UseState</li>
                    <li><Link to='/useeffect'>UseEffect</Link></li>
                    <li><Link to='/useeffectAPI'>UseEffectAPI</Link></li>
                    <li><Link to='/useref'>UseRef</Link></li>
                    <li><Link to='/usememo'>UseMemo</Link></li>
                    <li><Link to='/usecallback'>UseCallback</Link></li>
                    <li><Link to='/usememorize'>UseMemorize</Link></li>
                  </ol>
                    )
                  }
                  
                </div>
                <li><Link to='/hoc' className='link'>Hoc</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
        
        </nav>
    </header>
  )
}

export default NavBar