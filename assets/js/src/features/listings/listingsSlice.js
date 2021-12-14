import { createSlice } from '@reduxjs/toolkit';
import { normalize, denormalize } from 'normalizr';

import { item, sale } from './listingsSchemas';

const initialState = {
  items: {
    byId: {},
    allIds: []
  },
  sales: {
    byid: {},
    allIds: []
  }
};

export const listingsSlice = createSlice({
  name: 'listings',
  initialState,
  reducers: {
    setAllItems: (state, action) => {
      const normalizedItems = normalize(action.payload, [item]);

      state.items = {};
      state.items.byId = normalizedItems.entities.items;
      state.items.allIds = normalizedItems.result;
    },
    setItem: (state, action) => {
      const item = action.payload;

      state.items.byId[item.id] = item;
      state.items.allIds.push(item.id);
    },
    setSales: (state, action) => {
      const normalizedSales = normalize(action.payload, [sale]);

      state.sales = {};
      state.sales.byId = normalizedSales.entities.sales;
      state.sales.allIds = normalizedSales.result;
    }
  }
});

export const { setAllItems, setItem, setSales } = listingsSlice.actions;

export const selectAllItems = (state) => {
  return denormalize(state.listings.items.allIds, [item], { items: state.listings.items.byId });
}
export const selectItemIds = (state) => state.listings.items.allIds;
export const selectItem = (state, id) => state.listings.items.byId[id];
export const selectSales = (state) => {
  return denormalize(state.listings.sales.allIds, [sale], { sales: state.listings.sales.byId })
}

export default listingsSlice.reducer;
