export const Counter = (props)=>{
  

  
  return(
      <div >
          <div>
             {/* <App counter={counter}/>  */}
          </div>
          <h2 className={props.num%2===0 ? "green" : "red"}>Counter:{props.num}</h2>
          <button onClick={()=>{props.change(1)}}>Add</button>
          <button onClick={()=>{if(props.num>=1)props.change(-1)}}>Sub</button>
          <button onClick={()=>{props.dbl()}}>Double</button>
      </div>
  ) 
}
