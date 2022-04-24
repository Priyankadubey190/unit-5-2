import styled from "styled-components"
import {useContext} from "react"
//import {Thim} from "../context/Thim"

//const {bg} = useContext(Thim)
const Container = styled.div`
background-color: white;
hight: auto;
width:700px;
background-color:${({bg})=>bg === "black" ? "black" : "white"}; 
display:flex;
color:blue;
img{
    height:40px;
    width:40px;
    border-radius:50%;
}
b{
    color:blue;
}
`;
export {Container}; 