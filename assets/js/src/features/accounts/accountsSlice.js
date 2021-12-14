import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
};

export const accountsSlice = createSlice({
  name: 'accounts',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload
    }
  }
});

export const { setUser } = accountsSlice.actions;

export const selectUser = (state) => state.accounts.user;

export default accountsSlice.reducer;
