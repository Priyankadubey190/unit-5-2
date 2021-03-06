import { useSelector} from "react-redux"
export const TodoList = () =>{
    const todos = useSelector((state)=>state.todos);
    console.log(todos);
    return(
        <div>
            {todos.map((item)=>(
                <div key = {item.id}>{item.title}</div>
            ))}
        </div>
    )
}
