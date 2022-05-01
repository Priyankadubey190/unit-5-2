import { legacy_createStore as createStore } from 'redux';

 const ADD_COUNT = "ADD_COUNT";
 const ADD_TODO = "ADD_TODO";
//Action Creator:
const addTodo = (title)=>{
    return {
        type: ADD_TODO,
        payload:{ 
          title: title,
          status: false,
        }
    };
};
const reducer = (store,action)=>{
    // if(action.type === 'ADD_Count'){
    //     return {...store, counter: store.counter + action.payload};
    // }
    // if(action.type === "ADD_TODO"){
    // return {...store, todos: [...store.todos, action.payload]};
    // }
    // return store;
    switch (action.type) {
        case ADD_COUNT:
            return {...store, counter: 
                store.counter + action.payload};
            case ADD_TODO:
                return {...store, todos: 
                    [...store.todos, action.payload]};
            default:
                    return store;
            }
        };
const initState = {
    counter : 0,
    todos : [],
   
}

const store = createStore(reducer, initState);
console.log("Store", store.getState());

store.dispatch({
    type: "ADD_COUNT", payload: 1});
console.log("After_dispatch" , store.getState());

// store.dispatch({
//     type: "ADD_TODO",
//     payload: {title: "Learn Redux", status: false},
// });
store.dispatch(addTodo("Learn Redux new"));
console.log("After dispatch", store.getState());

// store.dispatch({
//     type: "ADD_TODO",
//     payload: {title: "Learn Typescript", status: false},
// });
store.dispatch(addTodo("Learn Typescript"));
console.log("After dispatch", store.getState());

