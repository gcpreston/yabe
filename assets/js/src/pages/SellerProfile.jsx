import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchUser } from '../features/accounts/accountsService.js';
import { selectUser } from '../features/accounts/accountsSlice.js';
import { fetchSalesOfUser } from '../features/listings/listingsService.js';
import { selectSales } from '../features/listings/listingsSlice.js';
import { dollarString } from '../utils.js';

export default function SellerProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const sales = useSelector(selectSales);

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchSalesOfUser(dispatch, userId);
  }, []);

  if (user) {
    return (
      <>
        <h3>Seller Profile</h3>
        <p>Profile for {user.email}</p>
        <p>{user.role}</p>

        <p>Sales:</p>
        <ul>
          {sales.map(sale => <li key={sale.id}>{sale.item.name}: {dollarString(sale.item.price)} to {sale.buyer.email} ({sale.quantity} count)</li>)}
        </ul>
      </>
    );
  }

  return <p>Loading...</p>
}
