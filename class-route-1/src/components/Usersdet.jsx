import {useParams} from "react-router-dom"
export const Usersdet = ()=>{
    const {id} =useParams();
     return <div>User ID : {id}</div>
}