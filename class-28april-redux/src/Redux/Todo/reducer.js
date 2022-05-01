import {ADD_TODO} from "./action"
import { DELETE } from "./action"
import { TOGGLE } from "./action"
const init = {todos: []}

const todoReducer = (store = init, {type, payload}) =>{
    switch(type){
        case ADD_TODO:{
         return {
             ...store,
             todos: [...store.todos, payload]
         }  
         
        }
        case DELETE:
            return {...store, todos: store.todos.filter((e)=> e.id !== payload)}

            case TOGGLE:
                return {...store, todos: store.todos.map((e)=> e.id !== payload ? e : {...e,status: !e.status})}
        
        default:
            return store;
    }
}

export {todoReducer}