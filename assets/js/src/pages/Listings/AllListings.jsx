import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectAllItems } from '../../features/listings/listingsSlice';
import { fetchAllItems } from '../../features/listings/listingsService';
import Listings from '../Listings';

export default function AllListings() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  useEffect(() => {
    fetchAllItems(dispatch);
  }, []);

  return (
    <Listings items={items} link='listings'/>
  )
}
