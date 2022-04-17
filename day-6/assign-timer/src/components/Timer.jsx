import {useState, useEffect} from 'react'

export const Timer = ({start, end})=>{
 
    const [enicial,setEnicial] = useState(start);
   // const [last, setLast] = useState(end);
    useEffect(()=>{
       let id =  setInterval(()=>{
            setEnicial((previous)=>{
                if(previous >= end){
                    clearInterval(id)
                    return start;
                }
                return previous+1;
            })
        },400)
        return ()=>{
            clearInterval(id);
        }
       
    },[])

    return (
        <>
        <h2>Count: {enicial}</h2>
        
        </>
    )

}
