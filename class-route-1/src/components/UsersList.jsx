import axios from "axios";
import {Link} from "react-router-dom";
import {useState,useEffect} from "react";
export const UsersList = ()=>{
    const [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("https://reqres.in/api/users").then(({data})=>{
            setUsers(data.data)
            console.log(data.data);
        });
    },[]);

    return(
        <div>
            {users.map((user)=>{
               return(
                   <p key={user.id}>
                     <Link to={`/users/${user.id}`}>{user.id}. {user.first_name}</Link>
                   </p>
              
             )})
            }
        </div>
    )
}