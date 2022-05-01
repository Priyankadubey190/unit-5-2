import {useParams} from "react-router-dom"
import { useState,useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
export const Usersdet = ()=>{
    const {id} =useParams();
    const [user,setUser] = useState({});
    const {isAuth} = useContext(AuthContext);
    useEffect(()=>{
        axios.get(`https://reqres.in/api/users/${id}`).then(({data})=>{
            setUser(data.data);
            console.log("user",user)
        });
    },[])
    
    if(!isAuth){
        return <Navigate to={"/login"} />;
    }
     return(
          <div>
              {/* User ID : {id} */}
              <div>First Name : {user.first_name}</div>
              <div>Last Name : {user.last_name}</div>
          </div>
     )
}