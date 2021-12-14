import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { fetchUser } from '../features/accounts/accountsService.js';
import { selectUser } from '../features/accounts/accountsSlice.js';

export default function SellerProfile() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    fetchUser(dispatch, userId);
  }, []);

  if (user) {
    return (
      <>
        <h3>Seller Profile</h3>
        <p>Profile for {user.email}</p>
        <p>{user.role}</p>
      </>
    );
  }

  return <p>Loading...</p>
}
