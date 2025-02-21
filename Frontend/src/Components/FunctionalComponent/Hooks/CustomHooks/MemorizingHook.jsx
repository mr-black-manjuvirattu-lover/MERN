import {useState,useEffect} from 'react'

const useMemorize = (key,value) => {
    var[text2,setText2]=useState(()=>{
      var jsonValue=localStorage.getItem(key)
      if(jsonValue!==null){
          return JSON.parse(jsonValue)
      }
      return value
    })
        
    useEffect(()=>{
      localStorage.setItem(key,JSON.stringify(text2))
    },[key,text2])
    return [text2,setText2]
  }
  
export default useMemorize