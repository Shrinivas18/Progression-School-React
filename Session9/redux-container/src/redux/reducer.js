import { DECREMENT, INCREMENT, RESET } from "../redux/actionTypes";

export const initialState = {
  stepCounter: 0,
};

export const counterReducer = (currentState=initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...currentState,
        stepCounter: currentState.stepCounter + action.payload,
      };
    case DECREMENT:
      return {
        ...currentState,
        stepCounter: currentState.stepCounter - action.payload,
      };
    case RESET:
      return {...currentState,stepCounter:initialState.stepCounter};
    default:
      return currentState;
  }
};
