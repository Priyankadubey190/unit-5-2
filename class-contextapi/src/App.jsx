import { useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import {Card} from './components/Card'
import { useContext } from 'react';
import {LangContext} from "./contex/LanguageContext"
function App() {
  const [count, setCount] = useState(0)
  const {handleLang} = useContext(LangContext)
  return (
    <div>
      <button onClick={handleLang}>Toggle</button>
      <Navbar />
      <Card />
    </div>
  )
}

export default App
