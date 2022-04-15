import {useState} from "react";
import { TodoList } from "./TodoList";
import {nanoid} from "nanoid";
export const Todo = ()=>{
const [query, setQuery] = useState("");
const [task, setTask] = useState([]);

const handleChange = (e)=>{
    const x = e.target.value;
    console.log(x);
    setQuery(x);
}

const handleAdd = (query)=>{
    
    const todo = {
     title : query,
     status : false,
     id: nanoid(4),
     
    }
    setTask([...task,todo]);
    console.log("Item",task);
}

const handleToggle = (id)=>{
    setTask([...task.map(e=>e.id===id ? {...e,status:!e.status} : e)])
}
    return(
        <div>
            <TodoList data={task} event={handleToggle}/>
            <input type="text" placeholder="Enter Itam Name" onChange={handleChange} className="width" />
            <button onClick={()=>{handleAdd(query)}}>Add</button>
            
        </div>
    ) 
}