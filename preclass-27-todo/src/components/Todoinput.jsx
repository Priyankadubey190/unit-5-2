import {useState} from "react"
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid"
import {addTodo} from "../Redux/action"
export const Todoinput = () =>{
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = ()=>{
        const payload = {
            title,
            status: false,
            id: uuid()
        }
       const action = addTodo(payload);
       dispatch(action); 
    }

    return(
        <div>
            <h3>Add Todo</h3>
            <input type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
             placeholder="add something" />
            <button onClick={handleAdd}>Add</button>
        </div>
    )
}
