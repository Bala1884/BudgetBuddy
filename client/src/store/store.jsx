import { configureStore } from '@reduxjs/toolkit';
import expenseSlice from './reducer.jsx';
import { apiSlice } from './apiSlice.jsx';

export const store = configureStore({
    reducer : {
        expense : expenseSlice,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware)
})