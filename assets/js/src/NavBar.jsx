import React from "react";
import { useLocation } from 'react-router-dom';

const NavBar = () => {
  const location = useLocation();

  return (
    <div className='row'>
      <div className='col-12'>
        <ul className='nav nav-pills nav-justified'>
          <li className='nav-item'>
            <a className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} href='/'>Home</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${location.pathname.startsWith('/listings') ? 'active' : ''}`} href='/listings'>Listings</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${location.pathname.startsWith('/sellers') ? 'active' : ''}`} href='/sellers'>Sellers</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${location.pathname.startsWith('/buyers') ? 'active' : ''}`} href='/buyers'>Buyers</a>
          </li>
          <li className='nav-item'>
            <a className={`nav-link ${location.pathname.startsWith('/profile') ? 'active' : ''}`} href='/profile'>Profile</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
