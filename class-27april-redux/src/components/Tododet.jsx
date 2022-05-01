import { useSelector} from "react-redux"
import {useParams} from "react-router-dom"
export const Tododet = () =>{

    const {id} =useParams();
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    const x = todos.filter((e)=>e.id === id ? id : "")
   console.log("x",x); 
    

    return(
        <div>
            
                <div>Item Name: {x[0].title}</div>
                
        </div>
    )
}
