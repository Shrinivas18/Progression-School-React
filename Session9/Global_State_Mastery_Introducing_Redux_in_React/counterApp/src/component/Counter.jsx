import { useReducer } from "react";
import { counterReducer, initialState } from "../utils/reducer";
import { incrementCounter } from "../actions/incrementCounter";
import { decrementCounter } from "../actions/decrementCounter";
import { resetCounter } from "../actions/resetCounter";

function Counter() {
  const [counter, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>{counter.stepCounter}</h1>
      <button onClick={() => dispatch(incrementCounter(1))}>
        Increment by 1
      </button>
      <button onClick={() => dispatch(incrementCounter(5))}>
        Increment by 5
      </button>
      <button onClick={() => dispatch(decrementCounter(1))}>
        Decrement by 1
      </button>
      <button onClick={() => dispatch(decrementCounter(5))}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch(resetCounter({ type: "reset" }))}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
