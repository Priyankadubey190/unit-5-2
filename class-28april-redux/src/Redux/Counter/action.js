export const ADD_COUNT = "ADD_COUNT";

export const addCount = (payload) =>{
    return {
        type: ADD_COUNT,
        payload
    };
};