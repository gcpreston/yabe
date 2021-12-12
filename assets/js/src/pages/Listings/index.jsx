import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { selectAllItems } from '../../features/listings/listingsSlice';
import { fetchAllItems } from '../../features/listings/listingsService';

export default function Listings() {
  const dispatch = useDispatch();
  const items = useSelector(selectAllItems);

  useEffect(() => {
    fetchAllItems(dispatch);
  }, []);

  return (
    <ul>
      {items.map(item => (
      <li key={item.id}>
        <Link to={`/listings/${item.id}`}>
          {item.name}: {item.price} cents
        </Link>
      </li>
      ))}
      <Outlet />
    </ul>
  )
}
