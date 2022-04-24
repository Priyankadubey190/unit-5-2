import './App.css'
import { Home } from './components/Home'
import {About} from './components/About'
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {UsersList} from "./components/UsersList"
import {Usersdet} from "./components/Usersdet"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1>Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/users" element={<UsersList />} ></Route>
        <Route path="/users/:id" element={<Usersdet />} ></Route>
      </Routes>
    </div>
  )
}

export default App
