import './App.css'
import { Navbar } from './components/Navbar'
import {AuthContext} from './context/AuthContext'
import {useContext} from "react"
import {LoginStatus} from "./components/LoginStatus"
function App() {
  const {isAuth} = useContext(AuthContext)

  return (
    <div>
      {isAuth === "signout" ?  <Navbar /> : <LoginStatus /> }
    </div>
  )
}

export default App
