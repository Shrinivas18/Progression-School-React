import { ADD_EXPENSE, SET_BUDGET } from "./actions"

const initialState={
    budget:0,
    expenses:[]    
}

export const expenseReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_BUDGET:
            return {...state,budget:action.payload}
        case ADD_EXPENSE:
            return {...state, expenses:[...state.expenses,action.payload]}
        default:
            return state
    }

}