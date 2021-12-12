import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import listingsReducer from '../features/listings/listingsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    listings: listingsReducer
  },
});
