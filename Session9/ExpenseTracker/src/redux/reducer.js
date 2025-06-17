import { ADD_EXPENSE, DELETE_EXPENSE, PATCH_EXPENSE, SET_BUDGET } from "./actions"

const initialState={
    budget:0,
    expenses:[]    
}

export const expenseReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_BUDGET:
            return {...state, budget:action.payload}
        case ADD_EXPENSE:
            return {...state, expenses:[...state.expenses,action.payload]}
        case PATCH_EXPENSE:
            return 
        case DELETE_EXPENSE:
            return {...state,expenses:state.expenses.filter(item => item.id!==action.payload)}
        default:
            return state
    }

}