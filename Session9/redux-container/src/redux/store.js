import { createStore } from 'redux'
import { counterReducer } from "./reducer"

// createStore is depricated
// createStore(reducer)

const ourStore = createStore(counterReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default ourStore