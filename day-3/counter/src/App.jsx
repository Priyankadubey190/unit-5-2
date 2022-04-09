import logo from './logo.svg';
import './App.css';
import {Counter} from './components/Counter'
import {useState} from "react";
function App() {
  const [counter,setCounter] = useState(5); 

  const handlechange = (value)=>{
    setCounter(counter+value);
 }
 
 const double = ()=>{
     setCounter(counter*2);
 }

  return (
    <div className={`${counter%2===0 ? "bgred" : "bggreen"}`}>
      <h1>My Counter</h1>
      <Counter num={counter} change={handlechange} dbl={double} />
    </div>
  );
}

export default App;
