import { setUser } from './accountsSlice';

// DEV
const USERS_API = 'http://localhost:4000/api/users';

export const fetchUser = (dispatch, id) =>
  fetch(`${USERS_API}/${id}`)
    .then(response => response.json())
    .then(parsedResp => dispatch(setUser(parsedResp.data)));
