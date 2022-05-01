export const ADD_TODO = "ADD_TODO";

export const DELETE = "DELETE";
export const TOGGLE = "TOGGLE";

export const addTodo = (payload) =>{
    return {
        type: ADD_TODO,
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