import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from '../../features/accounts/accountsService.js';
import { selectUser } from '../../features/accounts/accountsSlice.js';
import { selectCurrentUser } from '../../features/auth/authSlice.js';
import { fetchPurchasesOfUser } from '../../features/listings/listingsService.js';
import Purchases from './Purchases';

export default function BuyerProfile(props) {
  const { userId } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const currentUser = useSelector(selectCurrentUser);

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

          {user.id === currentUser.id ?
            <Purchases userId={user.id} />
            :
            null
          }
        </>
      );
    } else {
      return <h3>User is not a buyer</h3>
    }
  }

  return <p>Loading...</p>
}
