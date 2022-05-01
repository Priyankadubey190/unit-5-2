import { addCount } from "../Redux/Counter/action";
import {useDispatch, useSelector} from "react-redux";
export const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector((store) => store.counter.counter)
return (
    <>
    <h3>Counter: {counter}</h3>
    <button 
     onClick={() => {
        dispatch(addCount(1))
        }}>ADD 1</button>
    </>
)
}