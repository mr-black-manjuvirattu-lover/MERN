import ClassComp from "./Components/ClassComponent/ClassComp"
import NavBar from "./Components/FunctionalComponent/NavBar"
import About from "./Components/FunctionalComponent/About"
import Gallery from "./Components/FunctionalComponent/Gallery"
import Contact from "./Components/FunctionalComponent/Contact"
import Login from "./Components/FunctionalComponent/Login"
import Signup from "./Components/FunctionalComponent/Signup"
import Home from "./Components/FunctionalComponent/Home"
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import UseEffect from "./Components/FunctionalComponent/Hooks/UseEffect"
import UseEffectAPI from "./Components/FunctionalComponent/Hooks/UseEffectAPI"
import UseRef from "./Components/FunctionalComponent/Hooks/UseRef"
import UseMemo from "./Components/FunctionalComponent/Hooks/useMemo"


function App() {
  
  return (
    <>
      <div>
        <ClassComp/>
        <main>
          <BrowserRouter>
            <NavBar/>
            <Routes>
              <Route path='/' element={<Home properties="Hello, " sjit="SJIT" welcome="welcome"/>}></Route>
              <Route path='/about' element={<About/>}></Route>
              <Route path='/gallery' element={<Gallery/>}></Route>
              <Route path='/useeffect' element={<UseEffect/>}></Route>
              <Route path='/contact' element={<Contact/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/useeffectAPI' element={<UseEffectAPI/>}></Route>
              <Route path="/useref" element={<UseRef/>}></Route>
              <Route path="/usememo" element={<UseMemo/>}></Route>
            </Routes>
          </BrowserRouter>
        </main>
        
      </div>
    </>
  )
}

export default App
