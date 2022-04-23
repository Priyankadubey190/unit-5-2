import {createContext} from "react";
import { useState } from "react"
export const CardContext = createContext();

export const CardContextProvider = ({children})=>{
const [card, setCard] = useState(1);
const handleChange = (inc)=>{
    setCard(card+inc);
}

    return (
     <CardContext.Provider value={{card, handleChange}}>
         {children}
     </CardContext.Provider>   
    );
};