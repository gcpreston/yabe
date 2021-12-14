import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectItemIds, selectItem } from '../../features/listings/listingsSlice';
import { fetchItem } from '../../features/listings/listingsService';
import { selectIsAuthenticated, selectUser } from '../../features/auth/authSlice';
import { dollarString } from '../../utils';

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
      <div className='row'>
        <div className='col-4'>
          <img
            src={item.image_url}
            alt={`item-${item.id}`}
            className='img-fluid border border-2 border-primary rounded'
          />
        </div>
        <div className='col-8 border rounded p-4'>
          <h1>{item.name}</h1>
          <h3>Seller: {item.seller.email}</h3>
          <p>{item.description}</p>
          <h3>Price: {dollarString(item.price)}</h3>
          {isAuthenticated && user.role === 'buyer' ? <button className='btn btn-primary'>Buy</button> : <p>Log in to buy</p>}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
