import { setSearchItemDetails, setSearchItems, setSearchItemQuantitySold } from './searchSlice';

const OUTSIDE_SALES_API = 'http://localhost:4000/api/outside_sales';
const SEARCH_API = 'https://api.bestbuy.com/v1/products';
const API_KEY = 'yQXMID6qllKGfAs7zO62bOqj';

export const fetchSearchResults = (dispatch, query) =>
  fetch(`${SEARCH_API}(search=${query})?format=json&show=sku,name,salePrice,image,shortDescription&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setSearchItems(parsedResp)));

export const fetchSearchItemDetails = (dispatch, id) =>
  fetch(`${SEARCH_API}(sku=${id})?format=json&show=sku,name,salePrice,image,shortDescription&apiKey=${API_KEY}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setSearchItemDetails(parsedResp)));

export const createOutsideSale = (dispatch, newSale) =>
  fetch(OUTSIDE_SALES_API, {
    method: 'POST',
    body: JSON.stringify(newSale),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(parsedResp => dispatch(setSearchItemQuantitySold(parsedResp.data.quantity_sold)));

export const fetchSearchItemQuantitySold = (dispatch, id) =>
  fetch(`${OUTSIDE_SALES_API}/quantity_sold/${id}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setSearchItemQuantitySold(parsedResp.data.quantity_sold)))
