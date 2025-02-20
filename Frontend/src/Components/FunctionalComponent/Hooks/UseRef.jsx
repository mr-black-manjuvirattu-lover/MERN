import React, { useEffect, useRef, useState } from 'react'

const UseRef = () => {
    const[text1,setText1]=useState("");
    var Previous=useRef()
    useEffect(()=>{
        Previous.current=text1
    })
  return (
    <div>
        Type Your Text : <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)}/>
        <p>Entered Text is : {text1}</p>
        <h5>The Previous render state is {Previous.current}</h5>
    </div>
  )
}

export default UseRef