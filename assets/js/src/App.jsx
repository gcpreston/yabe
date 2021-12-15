import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import AllListings from './pages/Listings/AllListings';
import Listing from './pages/Listings/Listing'
import NoMatch from './pages/NoMatch';
import SellerProfile from './pages/Seller/SellerProfile';
import BuyerProfile from './pages/Buyer/BuyerProfile';
import AuthLoader from "./AuthLoader";
import Search from "./pages/Search";
import Details from "./pages/Search/Details";

export default function App() {
  return (
    <div className='App'>
      <AuthLoader />
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />

          <Route path='listings'>
            <Route index element={<AllListings />} />
            <Route path=':id' element={<Listing />} />
          </Route>

          <Route path='sellers/'>
            <Route path=':userId' element={<SellerProfile />} />
          </Route>

          <Route path='buyers/'>
            <Route path=':userId' element={<BuyerProfile />} />
          </Route>

          <Route path='search/'>
            <Route path=':query' element={<Search />} />
          </Route>

          <Route path='details/'>
            <Route path=':id' element={<Details />} />
          </Route>

          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  )
}
