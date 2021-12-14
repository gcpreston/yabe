import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchUser } from '../features/accounts/accountsService.js';
import { selectUser } from '../features/accounts/accountsSlice.js';
import { fetchPurchasesOfUser } from '../features/listings/listingsService.js';
import { selectSales } from '../features/listings/listingsSlice.js';
import { dollarString } from '../utils.js';

export default function BuyerProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const purchases = useSelector(selectSales);

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchPurchasesOfUser(dispatch, userId);
  }, []);

  if (user) {
    if (user.role === 'buyer') {
      return (
        <>
          <h3>Buyer Profile</h3>
          <p>Profile for {user.email}</p>
          <p>{user.role}</p>

          <p>Purchases:</p>
          <ul>
            {purchases.map(p => <li key={p.id}>{p.item.name}: {dollarString(p.item.price)} from {p.item.seller.email} ({p.quantity} count)</li>)}
          </ul>
        </>
      );
    } else {
      return <h3>User is not a buyer</h3>
    }
  }

  return <p>Loading...</p>
}
