import { setAllItems, setItem, setSales } from './listingsSlice';

// DEV
const ITEMS_API = 'http://localhost:4000/api/items';
const SALES_API = 'http://localhost:4000/api/sales';

export const fetchAllItems = (dispatch) =>
  fetch(ITEMS_API)
    .then(response => response.json())
    .then(parsedResp => dispatch(setAllItems(parsedResp.data)));

export const fetchItem = (dispatch, id) =>
  fetch(`${ITEMS_API}/${id}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setItem(parsedResp.data)));

export const fetchSalesOfUser = (dispatch, userId) =>
  fetch(`${SALES_API}/sold_by/${userId}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setSales(parsedResp.data)));

export const fetchPurchasesOfUser = (dispatch, userId) =>
  fetch(`${SALES_API}/bought_by/${userId}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setSales(parsedResp.data)));
