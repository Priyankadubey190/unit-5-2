import {CardContext} from "../contex/CardContext";
import {LangContext} from "../contex/LanguageContext";
import { useContext } from "react";
export const Navbar = ()=>{
const {card} = useContext(CardContext);
const {lang} = useContext(LangContext);
    return(
        <nav style={{ 
            display: 'flex',
            justifyContent: 'end',
            padding: "15px",
            fontSize : "28px",
            border: "1px solid red",
            margin : "10px"
        }}>
         {lang === "english" ? "Cart" : "Thaila"} : {card}
        </nav>
    )
}