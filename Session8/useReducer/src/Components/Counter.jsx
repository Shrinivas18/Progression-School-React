import React, { useReducer } from "react";

const initialState = {
  stepCounter: 0,
};
const reducer = (currentState, action) => {
  // new State
  // newState value depends on action
  // action -> increment-> currentState + 1
  // action -> decrement-> currentState - 1
  switch (action.type) {
    case "increment":
      return {
        ...currentState,
        stepCounter: currentState.stepCounter + action.value,
      };
    case "decrement":
      return {
        ...currentState,
        stepCounter: currentState.stepCounter - action.value,
      };
    case "reset":
      return initialState;
    default:
      return { ...currentState };
  }
};
function Counter() {
  const [counter, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>{counter.stepCounter}</h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "reset", value: 0 })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: "incremen", value: 10 })}>
        +10
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 10 })}>
        -10
      </button>
    </div>
  );
}

export default Counter;
