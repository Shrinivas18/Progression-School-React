import {createStore} from "react"
import { counterReducer } from "./reducer"

// createStore is depricated
// createStore(reducer)

const ourStore = createStore(counterReducer)

export default ourStore