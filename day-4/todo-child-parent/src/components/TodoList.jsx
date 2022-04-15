import {TodoItem} from "./TodoItem"
export const TodoList = ({data,event})=>{

    return(
        <div>
         <TodoItem x={data} y={event}/>
        </div>
    )
}