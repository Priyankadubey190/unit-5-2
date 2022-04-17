import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Timer} from "./components/Timer"
function App() {
  const [count, setCount] = useState(0)
  const x = 10;
  const y = 22;
  return (
    <div className="App">
      <h1>Timer</h1>
      
      <button>{show? <Timer start= {x} end= {y}/> : Hide}</button>
    </div>
  )
}

export default App
