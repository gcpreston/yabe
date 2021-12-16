import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import OutsideBuyButton from '../../OutsideBuyButton';
import { dollarString } from '../../utils';
import { selectSearchItemDetails } from "../../features/search/searchSlice";
import { fetchSearchItemDetails, fetchSearchItemQuantitySold } from "../../features/search/searchService";

export default function Details() {
  const params = useParams();
  const id = parseInt(params.id);

  const dispatch = useDispatch();
  const item = useSelector(selectSearchItemDetails);

  useEffect(() => {
    fetchSearchItemDetails(dispatch, id)
      .then(() => fetchSearchItemQuantitySold(dispatch, id));
  }, []);

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
          <p>Quantity sold: {item.quantity_sold}</p>
          <OutsideBuyButton item={item} />
        </div>
      </div>
    );
  } else {
    return null;
  }
}
