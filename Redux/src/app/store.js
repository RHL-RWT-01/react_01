import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/To-Do/todoSlice';
export const store = configureStore({
    reducer: todoReducer
})