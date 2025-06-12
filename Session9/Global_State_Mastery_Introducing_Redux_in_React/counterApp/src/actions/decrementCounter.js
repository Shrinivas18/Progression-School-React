import { DECREMENT } from "../utils/actionTypes";

export const decrementCounter = (value) => ({ type: DECREMENT, payload: value });
