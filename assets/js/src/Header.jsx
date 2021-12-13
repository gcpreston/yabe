import React from 'react';
import AuthLoader from "./AuthLoader";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <div className='row'>
      <div className='col-2'>
        <h1>Yabe</h1>
        <p>Buy or sell goods!</p>
      </div>
      <SearchBar />
      <AuthLoader />
    </div>
  )
}

export default Header;
