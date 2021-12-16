import { setAllItems, setItem, setOutsideSales, setSales } from './listingsSlice';

// DEV
const ITEMS_API = 'http://localhost:4000/api/items';
const SALES_API = 'http://localhost:4000/api/sales';
const OUTSIDE_SALES_API = 'http://localhost:4000/api/outside_sales';

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

export const fetchOutsidePurchasesOfUser = (dispatch, userId) =>
  fetch(`${OUTSIDE_SALES_API}/bought_by/${userId}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setOutsideSales(parsedResp.data)));

export const createSale = (disaptch, newSale) =>
  fetch(SALES_API, {
    method: 'POST',
    body: JSON.stringify(newSale),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(parsedResp => disaptch(setItem(parsedResp.data.item)));
