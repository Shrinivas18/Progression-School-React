import { DECREMENT, INCREMENT, RESET } from "../redux/actionTypes";

export const decrementCounter = (value) => ({ type: DECREMENT, payload: value });
export const incrementCounter = (value) => ({ type: INCREMENT, payload: value });
export const resetCounter = () => ({ type: RESET });
