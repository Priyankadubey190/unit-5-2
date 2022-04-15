
export const TodoItem = ({x,y})=>{
  
    return(
        <div>
            {x.map((e)=>{
            return(
                <div className="container">
                    <div className="margin">{e.title}  --{e.status ? "Done" : "NotDone"}<button onClick={()=>{y(e.id)}}>Toggle</button></div>
                    
                </div>

            )
            })}
        </div>
    )
}