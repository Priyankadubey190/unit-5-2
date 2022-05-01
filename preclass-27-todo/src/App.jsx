import { useState } from 'react'
import './App.css'
import {Todoinput} from "./components/Todoinput"
import { TodoList } from './components/TodoList'

function App() {
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <Todoinput />
      <TodoList />
    </div>
  )
}

export default App
