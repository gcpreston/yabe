import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResult: {
    products: [],
    items: []
  },
  details: null
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchItems: (state, action) => {
      const searchResult = action.payload;
      const items = searchResult.products.map(p => {
        const price = p.salePrice * 100;

        return {
          id: p.sku,
          name: p.name,
          image_url: p.image,
          description: p.shortDescription,
          price: price,
          seller: { email: 'Best Buy' }
        }
      });

      state.searchResult = searchResult;
      state.searchResult.items = items;
    },
    setSearchItemDetails: (state, action) => {
      const p = action.payload.products[0];
      const price = p.salePrice * 100;
      state.details = {
        id: p.sku,
        name: p.name,
        image_url: p.image,
        description: p.shortDescription,
        price: price,
        quantity_sold: 0,
        seller: { email: 'Best Buy' }
      }
    },
    setSearchItemQuantitySold: (state, action) => {
      state.details.quantity_sold = action.payload;
    }
  }
});

export const { setSearchItems, setSearchItemDetails, setSearchItemQuantitySold } = searchSlice.actions;

export const selectSearchItems = (state) => {
  return state.search.searchResult.items;
}

export const selectSearchItemDetails = (state) => {
  return state.search.details;
}

export default searchSlice.reducer;
