import React from 'react';
import { useParams } from 'react-router-dom';

import BuyerProfile from './pages/Buyer/BuyerProfile.jsx';
import SellerProfile from './pages/Seller/SellerProfile.jsx';

export default function Profile(props) {
  const { type } = props;
  console.log('profile got', props)
  const { userId } = useParams();

  if (type === 'buyer') {
    return <BuyerProfile userId={userId} />;
  } else if (type === 'seller') {
    return <SellerProfile userId={userId} />;
  } else {
    return <h3>User is not a {type}</h3>;
  }
}
