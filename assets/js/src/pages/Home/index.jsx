import React from 'react';
import Dashboard from "./Dashboard";
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "../../features/auth/authSlice";
import AllListings from "../Listings/AllListings";

const Home = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <>
      <div className='row'>
        <div className='col-12'>
          <h1>Welcome to Yabe!</h1>
          <p>The best place to buy and sell goods</p>
        </div>
      </div>
      {isAuthenticated ? <Dashboard /> : null}
      <h1>Recent Listings</h1>
      <AllListings />
    </>
  )
}

export default Home;
