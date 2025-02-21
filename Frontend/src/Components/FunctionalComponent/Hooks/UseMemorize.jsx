import React, { use } from 'react'
import useMemorize from './CustomHooks/MemorizingHook'
const UseMemorize = () => {
  const[custID,setCustID]=useMemorize("CustomerID","")
  const[pass,setPass]=useMemorize("Password","")
  const handleEvent=()=>{
    //send to the hacker storage
    localStorage.removeItem("CustomerID")
    localStorage.removeItem("Password")
  }
  return (
    <div>
      <h1>This is a custom hook designed using useState</h1>
      CustomerID : <input type="text " value={custID} onChange={(e)=>setCustID(e.target.value)} />
      Password : <input type="text " value={pass} onChange={(e)=>setPass(e.target.value)} />
      <button onClick={handleEvent}>Login</button>
    </div>
  )
}

export default UseMemorize