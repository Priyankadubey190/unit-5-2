import {useState, useEffect} from 'react'

export const Democlass = ()=>{
console.log("demo one");
const [data,setData] = useState([]);

useEffect(()=>{
    fetch("http://localhost:8080/todos")
    .then((d)=>d.json())
    .then((data)=>{
      setData(data);
    });
  },[])

useEffect(()=>{
    console.log("Inside useEffect");
},[])
console.log("demo two");
    return(
        <>
        <h2>Welcome to masai</h2>
        {data.map((e)=>(
        <div>{e.title}</div>
      ))}
        </>
    )
}