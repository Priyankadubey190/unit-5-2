import {useState} from "react";
import { TodoList } from "./TodoList";
import {nanoid} from "nanoid";

export const Todo = ()=>{
const [query, setQuery] = useState("");
const [task, setTask] = useState([]);
const [complete, setComplete] = useState([]);


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

const handleDelete = (id)=>{
    const todofilter = task.filter((e)=>e.id != id);
    setTask(todofilter);
}

const checkChange = (id)=>{
    const temp = task.map(e=>e.id===id ? {...e,status:!e.status} : e)
    setTask(temp)

    
}
const showComplet = (status)=>{
    const showfilter = task.filter((e)=>e.status === status);
    setComplete([...complete,...showfilter]);
     const showincomplete = task.filter((el)=>el.status !== status);
     setTask([...showincomplete])
    console.log("complete",complete);
    console.log("incom",showincomplete);
}
    return(
        <div>
            
            <input type="text" placeholder="Enter Itam Name" onChange={handleChange} className="width" />
            <button onClick={()=>{handleAdd(query)}}>Add</button>
            <TodoList data={task} event={checkChange} deletetodo={handleDelete}/>
            {/* <button onClick={()=>{ handleClick(task.status)}}>Show Completed</button>   */}
            <button onClick={()=>{showComplet(true)}}>Show Completed Todos</button>
            
           {complete.map((e)=> {
            return (
               <div>
                <input type="checkbox" name="" /><span className="a">{e.title} </span>
               </div>
             )})}
               
        </div>
    ) 
}