import {ADD_TODO} from "./actionType"
import { ADD_COUNT, DELETE,TOGGLE } from "./actionType";

const init = {todos: [] , counter:0}

const reducer = (store = init, {type, payload}) =>{
    switch(type){
        case ADD_TODO:{
         return {
             ...store,
             todos: [...store.todos, payload]
         }  
         
        }
        case ADD_COUNT: 
         return {...store, counter: store.counter + payload};
        
        case DELETE:
            return {...store, todos: store.todos.filter((e)=> e.id !== payload)}

            case TOGGLE:
                return {...store, todos: store.todos.map((e)=> e.id !== payload ? e : {...e,status: !e.status})}
        
        default:
            return store;
    }
}

export {reducer}