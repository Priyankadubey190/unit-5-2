import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
export const Navbar =()=>{
const {handletoggle,handleisauth} = useContext(AuthContext);

var obj = {
    "email": "eve.holt@reqres.in",
    "password": "cityslicka"
}

function login(){
  axios.post("https://reqres.in/api/login",obj).then((res)=>{
    handleisauth("Login successfull");
    handletoggle(res.data.token)

  })  
}

    return(
        <div className="nav">
            <button onClick={()=>{login()}}>Login</button>
        </div>
    )
}