import {TodoItem} from "./TodoItem"
export const TodoList = ({data,event,deletetodo})=>{

    return(
        <div>
            {data.map((e)=>{
             return <TodoItem x={e} y={event} z={deletetodo} />
            })}
         
        </div>
    )
}