import React,{useEffect, useState} from 'react'

const Contact = () => {
    const[text,setText]=useState("hi");
    const[text1,setText1]=useState("hello");
    useEffect(()=>{
        console.log(text)
        console.log(text1)
    },[])
  return (
    <div>
        Type Your Text : <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        <h4>the Text is {text}</h4>
        <h3>This is UseEffect Example</h3>
        Type Your Text1 : <input type="text" value={text1} onChange={(e)=>setText1(e.target.value)} />
        <h4>the Text is {text1}</h4>
    </div>
  )
}

export default Contact