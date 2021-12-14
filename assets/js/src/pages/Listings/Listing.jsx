import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectItemIds, selectItem } from '../../features/listings/listingsSlice';
import { fetchItem } from '../../features/listings/listingsService';
import { selectIsAuthenticated, selectUser } from '../../features/auth/authSlice';

export default function Listing() {
  const params = useParams();
  const id = parseInt(params.id);

  const dispatch = useDispatch();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);
  const itemIds = useSelector(selectItemIds);
  const item = useSelector(state => selectItem(state, id));

  useEffect(() => {
    if (!itemIds.includes(id)) {
      fetchItem(dispatch, id);
    }
  }, [itemIds]);

  if (item) {
    return (
      <>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Seller: {item.seller.email}</p>
        {isAuthenticated && user.role === 'buyer' ? <button className='btn btn-primary'>Buy</button> : null}

        <img
          src={item.image_url}
          alt={`item-${item.id}`}
        />
      </>
    );
  } else {
    return null;
  }
}
