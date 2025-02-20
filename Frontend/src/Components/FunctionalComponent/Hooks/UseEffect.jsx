import React,{useEffect, useState} from 'react'

const UseEffect = () => {
    const[text,setText]=useState("hi");
    useEffect(()=>{
        console.log(text)
    },[])
  return (
    <div>
        Type Your Text : <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h4>the Text is {text}</h4>
    </div>
  )}
export default UseEffect
