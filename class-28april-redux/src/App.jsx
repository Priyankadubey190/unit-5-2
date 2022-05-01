import { useState } from 'react'
import './App.css'
import { Counter } from './components/Counter'
import {Todoinput} from "./components/Todoinput"
import { Tododet } from './components/Tododet'
import {Routes,Route} from "react-router-dom"

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/counter" element={<Counter/>}></Route>
        <Route path="/" element={<Todoinput/>}></Route>
        <Route path="todo/:id" element={<Tododet/>}></Route>

      </Routes>
      {/* <Counter />
      <h1>Todo List</h1>
      <Todoinput />
      <TodoList /> */}
    </div>
  )
}

export default App
