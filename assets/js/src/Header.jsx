import React from 'react';
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <>
      <div className='row'>
        <div className='col-12 col-sm-4 col-md-3 col-lg-2'>
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
