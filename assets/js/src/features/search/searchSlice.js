import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchResult: {
    products: []
  }
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchItems: (state, action) => {
      state.searchResult = action.payload;
    }
  }
});

export const { setSearchItems } = searchSlice.actions;

export const selectSearchItems = (state) => {
  return state.search.searchResult;
}

export default searchSlice.reducer;