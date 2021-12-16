import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllItems } from '../../features/listings/listingsSlice';
import { fetchAllItems } from '../../features/listings/listingsService';
import Listings from '../Listings';
import { selectCurrentUser } from '../../features/auth/authSlice';

export default function AllListings() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    fetchAllItems(dispatch);
  }, []);

  return (
    <>
      {currentUser && currentUser.role === 'seller' ? <a href='/listings/new' className='btn btn-primary mb-2'>New Listing</a> : null}
      <Listings items={items} link='listings' />
    </>
  )
}
