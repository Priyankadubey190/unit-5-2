import {ADD_TODO} from "./actionType";
import { ADD_COUNT } from "./actionType";
import {DELETE,TOGGLE} from "./actionType";
export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
        payload
    };
};
export const addCount = (payload) =>{
    return {
        type: ADD_COUNT,
        payload
    };
};
export const deletetodo = (payload) =>{
    return {
        type: DELETE,
        payload
    };
};
export const toggletodo = (payload) =>{
    return {
        type: TOGGLE,
        payload
    };
};

