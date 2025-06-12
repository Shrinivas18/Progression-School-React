import { DECREMENT, INCREMENT, RESET } from "../utils/actionTypes";

export const initialState = {
  stepCounter: 0,
};

export const counterReducer = (currentState, action) => {
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
      return { ...initialState };
    default:
      return currentState;
  }
};
