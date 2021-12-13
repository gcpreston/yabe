import React from "react";

const NavBar = () => {
  return (
    <ul className='nav nav-pills nav-justified'>
      <li className='nav-item'>
        <a className='nav-link active' href='/'>Home</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/listings'>Listings</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/sellers'>Sellers</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/buyers'>Buyers</a>
      </li>
      <li className='nav-item'>
        <a className='nav-link' href='/profile'>Profile</a>
      </li>
    </ul>
  )
}

export default NavBar;

