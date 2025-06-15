import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementCounter,
  decrementCounter,
  resetCounter,
} from "../redux/actions";
import "../App.css";

function Counter() {
  const counter = useSelector((state) => state.stepCounter);
  const dispatch = useDispatch();

  return (
    <div className="counter-wrapper">
      <div className="counter-value">{counter}</div>
      <div className="button-group">
        <button
          className="counter-button"
          onClick={() => dispatch(incrementCounter(1))}
        >
          +1
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(incrementCounter(5))}
        >
          +5
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(decrementCounter(1))}
        >
          -1
        </button>
        <button
          className="counter-button"
          onClick={() => dispatch(decrementCounter(5))}
        >
          -5
        </button>
        <button
          className="counter-button reset"
          onClick={() => dispatch(resetCounter())}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
