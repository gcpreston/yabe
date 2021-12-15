import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from '../features/auth/authSlice';
import accountsReducer from '../features/accounts/accountsSlice';
import listingsReducer from '../features/listings/listingsSlice';
import searchReducer from '../features/search/searchSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    listings: listingsReducer,
    accounts: accountsReducer,
    search: searchReducer
  },
});
