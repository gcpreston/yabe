import React from 'react';
import { useSelector } from 'react-redux';

import { selectIsAuthenticated, selectCurrentUser } from './features/auth/authSlice';

export default function BuyButton(props) {
  const { itemId } = props;
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectCurrentUser);

  const buyListing = () => {
    console.log('TODO: buy item', itemId);
  };

  if (isAuthenticated && user.role === 'buyer') {
    return <button className='btn btn-primary' onClick={buyListing}>Buy</button>;
  }

  return <p>Log in to buy</p>;
}
