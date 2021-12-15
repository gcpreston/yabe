import {setSearchItemDetails, setSearchItems} from "./searchSlice";

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