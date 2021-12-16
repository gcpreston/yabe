import React from 'react';
import { Outlet } from 'react-router-dom';
import ListingItem from "./ListingItem";

export default function Listings({items, link, outside}) {
  return (
    <ul className='list-group mb-2'>
      {items.map(item => (
        <ListingItem key={item.id} link={link} outside={outside} item={item} />
      ))}
      <Outlet />
    </ul>
  )
}
