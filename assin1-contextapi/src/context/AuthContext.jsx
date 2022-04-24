import {createContext} from "react";
import { useState } from "react"
export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
const [isAuth, setIsAuth] = useState("signout");
const [toggle,setToggle] = useState("");
const handleisauth = (value)=>{
    setIsAuth(value);

}
const handletoggle = (value)=>{
    setToggle(value)
}

    return (
     <AuthContext.Provider value={{isAuth,toggle,handletoggle, handleisauth}}>
         {children}
     </AuthContext.Provider>   
    );
};