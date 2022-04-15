
export const TodoItem = ({x,y,z})=>{
    
    return(
        <div>
        
                <div className="container">
                    <div className={x.status ? "a" : "none"}> 
                    <input type="checkbox" onChange={()=>{y(x.id)}}/> 
                     {x.title} <button onClick={()=>{z(x.id)}}>Delete</button></div>
                </div>

        </div>
    )
}