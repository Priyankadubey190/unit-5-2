import './App.css'
import { Home } from './components/Home'
import {About} from './components/About'
import {Routes,Route} from "react-router-dom"
import {Navbar} from "./components/Navbar"
import {UsersList} from "./components/UsersList"
import {Usersdet} from "./components/Usersdet"
import {PrivateRoute} from "./components/PrivateRoute"
import {Login} from "./components/Login"
function App() {
  
  return (
    <div className="App">
      <Navbar />
      <h1>Routing</h1>
      <Routes>
        <Route path="/" element={<Home />} > </Route>
        <Route path="/about" element={<About />} ></Route>
        <Route path="/users" element={<UsersList />} >
          </Route>

        <Route path="/users/:id" element={
        <PrivateRoute>
          <Usersdet />
        </PrivateRoute>
       } ></Route>
       <Route path="/login" element={<Login />} ></Route>
        
      </Routes>
    </div>
  )
}

export default App
