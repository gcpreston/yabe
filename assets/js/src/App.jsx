import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header';
import Home from './pages/Home';
import AllListings from './pages/Listings/AllListings';
import Listing from './pages/Listings/Listing'
import NewListingForm from './pages/Listings/NewListingForm';
import NoMatch from './pages/NoMatch';
import Profile from './Profile';
import AuthLoader from "./AuthLoader";
import Search from "./pages/Search";
import CurrentUserProfile from './pages/CurrentUserProfile';
import Details from "./pages/Search/Details";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export default function App() {
  return (
    <div className='App'>
      <AuthLoader />
      <Header />

      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />

          <Route path='listings/'>
            <Route index element={<AllListings />} />
            <Route path=':id' element={<Listing />} />
            <Route path='new' element={<NewListingForm />} />
          </Route>

          <Route path='privacy' element={<PrivacyPolicy />} />

          <Route path='sellers/'>
            <Route path=':userId' element={<Profile type='seller' />} />
          </Route>

          <Route path='buyers/'>
            <Route path=':userId' element={<Profile type='buyer' />} />
          </Route>

          <Route path='profile' element={<CurrentUserProfile />} />

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
