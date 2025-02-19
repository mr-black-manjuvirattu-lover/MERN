import React from 'react'

class ClassComp extends React.Component{
  render(){ 
    var styling={
        textAlign:"center",
        backgroundColor:"blue",
        color:"white"
    }
    return(
        <div>
          <h1 style={styling}>Welcome</h1>
        </div>
    )
  }
}

export default ClassComp
