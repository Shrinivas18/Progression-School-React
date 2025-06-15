import { configureStore } from '@reduxjs/toolkit';
import { todoReducer } from './reducer';

export const myStore = configureStore({reducer:todoReducer})