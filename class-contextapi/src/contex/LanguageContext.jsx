import {createContext} from "react";
import { useState } from "react";
export const LangContext = createContext();

export const LangContextProvider = ({children})=>{
    const [lang, setLang] = useState("english");
const handleLang = ()=>{
    setLang(lang === "english" ? "hindi" : "english");
}

    return <LangContext.Provider value={{lang,handleLang}}>{children}</LangContext.Provider>
}