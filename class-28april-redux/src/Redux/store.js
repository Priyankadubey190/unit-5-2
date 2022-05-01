import {createStore, combineReducers} from 'redux';
import {counterReducer} from './Counter/reducer'
import {todoReducer} from './Todo/reducer';

const rootReducer = combineReducers({ 
    counter: counterReducer,
    todo : todoReducer,
});

export const store = createStore(rootReducer)

console.log("Store", store.getState());

