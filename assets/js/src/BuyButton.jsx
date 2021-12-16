import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'react-simple-snackbar'

import { selectIsAuthenticated, selectCurrentUser } from './features/auth/authSlice';
import { createSale } from './features/listings/listingsService';

export default function BuyButton(props) {
  const { itemId } = props;
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);

  const snackbarOptions = {
    position: 'bottom-left',
    style: {
      backgroundColor: 'green'
    }
  };

  const [openSnackbar, _closeSnackbar] = useSnackbar(snackbarOptions)

  const buyListing = () => {
    const saleAttrs = { sale: { item_id: itemId, buyer_id: user.id, quantity: 1 } };
    createSale(dispatch, saleAttrs);
    openSnackbar('Buy success!');
  };

  if (!isAuthenticated) {
    return <p>Log in to buy</p>;
  }

  if (user.role === 'buyer') {
    return <button className='btn btn-primary' onClick={buyListing}>Buy</button>;
  }

  return null;
}
