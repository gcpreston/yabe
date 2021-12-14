import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import Listings from './pages/Listings';
import Listing from './pages/Listings/Listing'
import NoMatch from './pages/NoMatch';
import SellerProfile from './pages/SellerProfile';
import BuyerProfile from './pages/BuyerProfile';
import AuthLoader from "./AuthLoader";

export default function App() {
  return (
    <div className='App'>
      <AuthLoader />
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />

          <Route path='listings'>
            <Route index element={<Listings />} />
            <Route path=':id' element={<Listing />} />
          </Route>

          <Route path='sellers/'>
            <Route path=':userId' element={<SellerProfile />} />
          </Route>

          <Route path='buyers/'>
            <Route path=':userId' element={<BuyerProfile />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
