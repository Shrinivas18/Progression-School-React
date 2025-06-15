// import { createStore } from "redux";   -- Depricated
import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from "./reducer";

// createStore is depricated
// createStore(reducer)

// const ourStore = createStore(
//   counterReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

const ourStore = configureStore({reducer:counterReducer})

export default ourStore;