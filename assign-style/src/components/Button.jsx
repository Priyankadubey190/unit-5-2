import styled from 'styled-components'

const Button = styled.button`
margin: 10px;
padding : 5px;
border-radius : 2px;
background-color : ${({pri})=> pri === "blue" ? "skyblue" : "white"};
color: ${({pri,lin})=> pri === "blue" ? "white" : lin === "sk" ? "skyblue" : "black"};
border: ${({bor,bord})=> bord === "sol" ? bor === "das" ? "2px dashed black" : "2px solid black" : "none"}
`;
export {Button};