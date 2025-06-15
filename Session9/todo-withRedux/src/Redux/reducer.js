import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./actionTypes";
import {v4 as uuid} from 'uuid';

const initialState=[];
export const todoReducer = (state=initialState,action)=>{
    switch(action.type){
        case ADD_TODO:
            const newData = {id:uuid(),text:action.payload}
            return [...state,newData]
        case UPDATE_TODO:
            return state.map(item => item.id===action.id ? {...item,text:action.payload}:item)
        case DELETE_TODO:
            return state.filter(item=>item.id!== action.id);
        default:
            return state
    }
}