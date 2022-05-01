import {useState} from "react"
import { useSelector} from "react-redux"
import { deletetodo, toggletodo} from "../Redux/action"
import { useDispatch } from "react-redux";
import {v4 as uuid} from "uuid"
import {addTodo} from "../Redux/action"
import {Link} from "react-router-dom";

export const Todoinput = () =>{
    const todos = useSelector((state)=>state.todos);
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleDelete = (id)=>{
        dispatch(deletetodo(id))
     }
    
     const handleToggle = (id)=>{
         dispatch(toggletodo(id))
     }


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

            {todos.map((item)=>{
              return(
                    <div key = {item.id}>
                <Link to={`/todo/${item.id}`}>    {item.title} <button onClick={()=>{handleDelete(item.id)}}>Delete</button> <button onClick={()=>{handleToggle(item.id)}}>{item.status ? "Done" : "NotDone"}</button>
                </Link>
                </div>
              
              )})}
        </div>
    )
}
