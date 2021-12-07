import React from 'react';
import { useParams } from 'react-router-dom';

export default function SellerProfile() {
  const { username } = useParams();

  return (
    <>
      <h3>Seller Profile</h3>
      <p>Profile for {username}</p>
    </>
  )
}
