import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUser } from '../../features/accounts/accountsService.js';
import { selectUser } from '../../features/accounts/accountsSlice.js';
import { selectCurrentUser } from '../../features/auth/authSlice.js';
import { fetchSalesOfUser } from '../../features/listings/listingsService.js';
import Sales from './Sales';

export default function SellerProfile(props) {
  const { userId } = props;
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    fetchUser(dispatch, userId);
    fetchSalesOfUser(dispatch, userId);
  }, []);

  if (user) {
    if (user.role === 'seller') {
      return (
        <>
          <h3>Seller Profile</h3>
          <p>Profile for {user.email}</p>

          {user.id === currentUser.id ?
            <Sales userId={user.id} />
            :
            null
          }
        </>
      );
    } else {
      return <h3>User is not a seller</h3>;
    }
  }

  return <p>Loading...</p>
}
