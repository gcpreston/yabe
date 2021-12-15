import React from 'react';
import { useSelector } from 'react-redux';
import BuyerProfile from './Buyer/BuyerProfile';
import SellerProfile from './Seller/SellerProfile';

import { selectIsAuthenticated, selectCurrentUser } from '../features/auth/authSlice';

export default function CurrentUserProfile() {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const currentUser = useSelector(selectCurrentUser);

  if (isAuthenticated) {
    if (currentUser.role === 'buyer') {
      return <BuyerProfile userId={currentUser.id} />
    } else if (currentUser.role === 'seller') {
      return <SellerProfile userId={currentUser.id} />
    }
  }

  return <h3>Not authenticated</h3>;
}
