import React from "react";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <ul className='nav nav-pills nav-justified'>
      <li className='nav-item'>
        <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} href='/'>Home</a>
      </li>
      <li className='nav-item'>
        <a className={`nav-link ${location.pathname === '/listings' ? 'active' : ''}`} href='/listings'>Listings</a>
      </li>
      <li className='nav-item'>
        <a className={`nav-link ${location.pathname === '/sellers' ? 'active' : ''}`} href='/sellers'>Sellers</a>
      </li>
      <li className='nav-item'>
        <a className={`nav-link ${location.pathname === '/buyers' ? 'active' : ''}`} href='/buyers'>Buyers</a>
      </li>
      <li className='nav-item'>
        <a className={`nav-link ${location.pathname === '/profile' ? 'active' : ''}`} href='/profile'>Profile</a>
      </li>
    </ul>
  )
}

export default NavBar;
