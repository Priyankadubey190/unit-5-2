import {ADD_TODO} from "./actionType"
const initState = {
    todos: [
        {
            id: '1',
            title: 'Learn Redux',
            status: false,
        }
    ]
};

const reducer = (store = initState, {type, payload}) =>{
    switch(type){
        case ADD_TODO:{
         return {
             ...store,
             todos: [...store.todos, payload]
         }   
        }
        default:
            return store;
    }
}

export {reducer}