import ClassComp from "./Components/ClassComponent/ClassComp"
import NavBar from "./Components/FunctionalComponent/NavBar"
import About from "./Components/FunctionalComponent/About"
import Gallery from "./Components/FunctionalComponent/Gallery"
import Contact from "./Components/FunctionalComponent/Contact"
import Login from "./Components/FunctionalComponent/Login"
import Signup from "./Components/FunctionalComponent/Signup"
import Home from "./Components/FunctionalComponent/Home"
function App() {
  
  return (
    <>
      <NavBar/>
      <ClassComp/>
      <About/><hr />
      <Gallery/><hr />
      <Contact/><hr />
      <Login/><hr />
      <Signup/><hr />
      <Home properties="Hello, " sjit="SJIT" welcome="welcome"/><hr />
    </>
  )
}

export default App
