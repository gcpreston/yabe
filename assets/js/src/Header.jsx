import React from 'react';
import AuthLoader from "./AuthLoader";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className='row'>
        <div className='col-2'>
          <a href='/' className='text-decoration-none'>
            <h1>Yabe</h1>
          </a>
          <p>Buy or sell goods!</p>
        </div>
        <SearchBar />
      </div>
      <div className='row'>
        <NavBar />
      </div>
      <hr/>
    </>
  )
}

export default Header;
