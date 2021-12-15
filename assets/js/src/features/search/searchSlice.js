import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  searchResult: {
    products: [],
    items: []
  }
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchItems: (state, action) => {
      const searchResult = action.payload;

      console.log(searchResult.products);
      const items = searchResult.products.map(p => {
        const price = p.salePrice * 100;

        return {
          id: p.sku,
          name: p.name,
          image_url: p.image,
          description: p.shortDescription,
          price: price,
          seller: {email: 'Best Buy'}
        }
      });

      state.searchResult = searchResult;
      state.searchResult.items = items;
    }
  }
});

export const { setSearchItems } = searchSlice.actions;

export const selectSearchItems = (state) => {
  return state.search.searchResult.items;
}

export default searchSlice.reducer;