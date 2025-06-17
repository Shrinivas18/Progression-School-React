export const SET_BUDGET ="set_budget"
export const ADD_EXPENSE="add_expense"
export const PATCH_EXPENSE= "patch_expense"

export const setBudget=(amount)=>({
    type:SET_BUDGET,
    payload:amount
})

export const addExpense=(expense)=>({
    type:ADD_EXPENSE,
    payload:expense
})

export const patchExpense=(id,expense)=>({
    type: PATCH_EXPENSE,
    payload : {id, expense}
})