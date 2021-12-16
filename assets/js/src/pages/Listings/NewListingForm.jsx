import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'react-simple-snackbar'

import { selectCurrentUser } from '../../features/auth/authSlice';
import { createitem } from '../../features/listings/listingsService';

export default function NewListingForm() {
  const snackbarOptions = {
    position: 'bottom-left',
    style: {
      backgroundColor: 'green'
    }
  };

  const [openSnackbar, _closeSnackbar] = useSnackbar(snackbarOptions);

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const setField = (setter) => {
    return (e) => setter(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const itemAttrs = {
      item: {
        name,
        description,
        image_url: imageUrl,
        price: parseFloat(price) * 100,
        seller_id: currentUser.id
      }
    }
    createitem(dispatch, itemAttrs);
    openSnackbar('Listing created!');

    setName('');
    setDescription('');
    setImageUrl('');
    setPrice('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group mb-2">
        <label htmlFor="new-listing-name" className='form-label'>Item name</label>
        <input type="text" className="form-control" id="new-listing-name" value={name} onChange={setField(setName)} />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="new-listing-description">Description</label>
        <textarea
          className="form-control"
          id="new-listing-description"
          rows="3"
          value={description}
          onChange={setField(setDescription)}
        />
      </div>
      <div className="form-group mb-2">
        <label htmlFor="new-listing-image">Image URL</label>
        <input type='text' className="form-control" id="new-listing-image" value={imageUrl} onChange={setField(setImageUrl)} />
      </div>
      <div className="form-group mb-2">
        <label htmlFor='new-listing-price'>Price</label>
        <div className='input-group'>
          <div className="input-group-prepend">
            <span className="input-group-text">$</span>
          </div>
          <input type="text" className="form-control" id='new-listing-price' value={price} onChange={setField(setPrice)} />
        </div>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
}
