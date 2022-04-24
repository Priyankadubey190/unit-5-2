import {useContext} from "react"
import { AuthContext } from "../context/AuthContext"
export const LoginStatus = ()=>{
const {toggle,isAuth} = useContext(AuthContext);
    return(
     <div>
         <h1>User Login Status : {isAuth}</h1>
         <h2>Token : {toggle}</h2>
     </div>
    )
}