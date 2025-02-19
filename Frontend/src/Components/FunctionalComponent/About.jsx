import React from 'react'
import { useState } from 'react'
const About = () => {
    const InitialValue=0
    const [num,setNum]=useState(InitialValue);
    const styling={
            color:"white",
            backgroundColor:"blue",
            padding:"10px",
            borderRadius:"10px"
    }
    const divStyle={
        textAlign:"center",
    }
  return (
    <div style={divStyle}>
      <p>{InitialValue}</p>
      <button style={styling} onClick={(()=>setNum(num+1))}>+</button>
      <h3>updating {num}</h3> 
      <button style={styling} onClick={()=> setNum(num-1)}>-</button>
      <button style={styling} onClick={()=> setNum(0)}>Reset</button>
    </div>
  )
}

export default About
