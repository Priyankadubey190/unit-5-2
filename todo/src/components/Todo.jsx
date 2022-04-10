import {useState} from "react";

export const Todo = ()=>{
    const [query, setQuery] = useState("");
    const [task, setTask] = useState([]);
     
    const handlechange = (e)=>{
     console.log(e.target.value);
     const x = e.target.value;
     setQuery(x)
    }
    const handleadd = ()=>{
       
        setTask([...task, query]);
    }
    return(
        <>
        <input type="text" placeholder="Enter Iteam Name" onChange={handlechange}/>
        <button onClick={handleadd}>Add</button>
        <div>
        {task.map((item)=>{
          return  <div>{item}</div>
        })}
        </div>
       
        </>
    ) 
}