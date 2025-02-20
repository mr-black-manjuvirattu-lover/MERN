import React, { useMemo, useState } from 'react'

function slowFunction(num){
    for(var i=0;i<100000000;i++){
        return num*2
    }
}

const UseMemo = () => {
    var[number,setNumber]=useState(0)
    var[theme,setTheme]=useState(false)
    var styling={
        backgroundColor:theme?"black":"white",
        color:theme?"white":"black"
    }
    var doubleUpNumber=useMemo((r)=>{
        return slowFunction(number)
    },[number])

  return (
    <div style={styling}>
        <button onClick={()=>setTheme(!theme)}>Toggle Theme</button>
        <h1>This is UseMemo</h1>
        Number Box : <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}/>
        <h1>The Number is {number}</h1>
        <h1>The Number is {doubleUpNumber}</h1>
        <h1>The Number is {slowFunction(number)}</h1>
    </div>
  )
}

export default UseMemo