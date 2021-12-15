import React from 'react';
import { Outlet } from 'react-router-dom';
import ListingItem from "./ListingItem";

export default function Listings(params) {
  console.log(params);
  return (
    <ul className='list-group mb-2'>
      {params.items.map(item => (
        <ListingItem key={item.id} {...item} />
      ))}
      <Outlet />
    </ul>
  )
}
