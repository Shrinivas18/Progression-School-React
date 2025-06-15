import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";

export const addTodo=(text)=>({
    type:ADD_TODO,
    payload:text
})

export const updateTodo=(id,text)=>({
    id:id,
    type:UPDATE_TODO,
    payload:text
})

export const deleteTodo=(id)=>({
    type:DELETE_TODO,
    id:id
})