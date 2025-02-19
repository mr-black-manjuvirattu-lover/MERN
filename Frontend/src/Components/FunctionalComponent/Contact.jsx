import React,{useState} from 'react'

const Contact = () => {
    const[text,setText]=useState("");
  return (
    <div>
        <p>{text}</p>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        
    </div>
  )
}

export default Contact