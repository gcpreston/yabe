import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'react-simple-snackbar'

import { selectIsAuthenticated, selectCurrentUser } from './features/auth/authSlice';
import { createOutsideItemIfNotExists, createOutsideSale } from './features/search/searchService';

export default function BuyButton(props) {
  const { item } = props;
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
    createOutsideItemIfNotExists(dispatch, { outside_item: { ...item, description: 'Outside item', seller: item.seller.email} })
      .then(() => {
        const outsideSaleAttrs = { outside_sale: { item_id: item.id, buyer_id: user.id, quantity: 1 } };
        createOutsideSale(dispatch, outsideSaleAttrs);
        openSnackbar('Buy success!');
      });
  };

  if (isAuthenticated && user.role === 'buyer') {
    return <button className='btn btn-primary' onClick={buyListing}>Buy</button>;
  }

  return <p>Log in to buy</p>;
}
