import React from 'react';
import { useParams } from 'react-router-dom';

export default function Listing() {
  const { id } = useParams();

  return (
    <>
      <h3>Some cool product with id {id}</h3>
      <p>description...</p>
      <p>Buy it now: $1,000,000</p>
    </>
  )
}

