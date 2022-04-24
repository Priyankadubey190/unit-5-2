import {createContext} from "react";
import { useState } from "react"
export const Thim = createContext();

export const ThimProvider = ({children})=>{
const [bg, setBg] = useState("black");
const handleThim = ()=>{
    setBg(bg === "black" ? "white" : "black");
}

    return (
     <Thim.Provider value={{bg, handleThim}}>
         {children}
     </Thim.Provider>   
    );
};