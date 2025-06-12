import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/actionTypes";
import { useDispatch, useSelector } from "react-redux";

function CounterApp() {
  //   const [CounterApp, dispatch] = useReducer(counterReducer, initialState);
  const dispatch = useDispatch();
  const counter = useSelector((count) => console.log(count));
  return (
    <div>
      {/* <h1>{CounterApp.stepCounter}</h1> */}
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

export default CounterApp;
