import '../CSS/NavBar.css'
import React from 'react'
import {Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <header>
        <nav>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <div className='drop'>
                  <span>Hooks</span>
                  <ol className='drag'>
                    <li>UseState</li>
                    <li><Link to='/useeffect'>UseEffect</Link></li>
                  </ol>
                </div>
                <li><Link to='/contact'>Contact</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
        
        </nav>
    </header>
  )
}

export default NavBar