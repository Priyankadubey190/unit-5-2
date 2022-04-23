import {CardContext} from "../contex/CardContext";
import {useContext} from "react";
export const Card = ()=>{
    const {handleChange} = useContext(CardContext);
    return(

        <div style={{ 
            backgroundColor: 'teal',
            height: '400px',
            width: '400px',
            padding: '10px'
        }}>
       <button onClick={()=>{
           handleChange(1)
       }}>Add to Card</button>
        </div>
        
    )
}