import React from 'react'

const Home= (properties) => {
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white"
    }
  return (
    <div>
        <h1 style={styling}>Welcome</h1>
        <p>{properties.properties}{properties.sjit}</p>
    </div>
  )
}

export default Home