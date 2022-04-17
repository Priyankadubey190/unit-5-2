import {useState,useEffect} from "react";
import axios from "axios";

export const Todo =()=>{
    const [todo,setTodo] = useState([]);
    const [text,setText] = useState("");
    const [page, setPage] = useState(1);
   useEffect(()=>{
   getData();
   },[page]);
   
   const getData = async () =>{
       const data = await fetch(`http://localhost:8080/todos?_page=${page}&_limit=3`).then((d)=>
       d.json()
       );
       setTodo(data);
   }
   const handleadd = (text)=>{
   const payload = {
    title: text,
    status: false,
};

   axios.post("http://localhost:8080/todos",payload)
    .then(()=>{
        getData();
    })
    .catch((e)=>{
        console.log("error", e);
    })
}

    return(
        <>
        <input type="text" placeholder="Enter Todo"
         onChange={(e)=> setText(e.target.value)} />
        <button onClick={()=>{handleadd(text)}}>Add Todo</button>
         <div>
             {
                 todo.map(t=>(
                 <div>{t.id}. {t.title}</div>
                 ))
             }
         </div>
         <button onClick={()=>{setPage(page+1)}}>NExt</button><button onClick={()=>{setPage(page-1)}}>Previous</button>
        </>
    )
}