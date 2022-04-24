import { useState } from 'react'
import './App.css'
import {Dashboard} from "./components/Dashbord"
import {Container} from "./components/Container"
import {useContext} from "react"
import {Side} from "./components/Side"
import {Thim} from "./context/Thim"
function App() {
  const {bg} = useContext(Thim)
  const {handleThim} = useContext(Thim)
  console.log(bg)
  
  return (
    <>
    <button onClick={()=>{handleThim()}}>Theam</button>
    <Container bg={bg}>
        <Side />
        <Dashboard bg={bg}/>
      </Container>
    </>
  )
}

export default App
