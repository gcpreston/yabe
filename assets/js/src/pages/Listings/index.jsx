import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { selectAllItems } from '../../features/listings/listingsSlice';
import { fetchAllItems } from '../../features/listings/listingsService';
import ListingItem from "./ListingItem";

export default function Listings() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  useEffect(() => {
    fetchAllItems(dispatch);
  }, []);

  return (
    <ul className='list-group'>
      {items.map(item => (
        <ListingItem key={item.id} {...item} />
      ))}
      <Outlet />
    </ul>
  )
}
