import { useReducer, useState } from "react";
import "./App.css";

const initialState = 0;
const reducer = (currentState, action) => {
  switch (action.type) {
    case "increment":
      return currentState + action.data;
    case "decrement":
      return currentState - action.data;
    case "reset":
      return initialState;
    default:
      currentState;
  }
};
function App() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => dispatch({ type: "increment", data: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", data: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", data: 0 })}>
        Reset
      </button>
    </div>
  );
}

export default App;
