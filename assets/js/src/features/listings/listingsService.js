import { setAllItems, setItem } from './listingsSlice';

// DEV
const ITEMS_API = 'http://localhost:4000/api/items';

export const fetchAllItems = (dispatch) =>
  fetch(ITEMS_API)
    .then(response => response.json())
    .then(parsedResp => dispatch(setAllItems(parsedResp.data)));

export const fetchItem = (dispatch, id) =>
  fetch(`${ITEMS_API}/${id}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setItem(parsedResp.data)));
