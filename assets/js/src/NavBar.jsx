import React from "react";
import { useLocation } from 'react-router-dom';
import {useSelector} from "react-redux";
import {selectIsAuthenticated} from "./features/auth/authSlice";

const NavItem = (props) =>
  <li className='nav-item'>
    <a className={`nav-link ${props.active ? 'active' : ''}`} href={props.path}>{props.name}</a>
  </li>

const NavBar = () => {
  const location = useLocation();
  const isAuthenticated = useSelector(selectIsAuthenticated);

  return (
    <div className='row'>
      <div className='col-12'>
        <ul className='nav nav-pills'>
          <NavItem active={location.pathname === '/'} path={'/'} name={'Home'}/>
          <NavItem active={location.pathname.startsWith('/listings')} path={'/listings'} name={'Listings'}/>
          <NavItem active={location.pathname.startsWith('/sellers')} path={'/sellers'} name={'Sellers'}/>
          <NavItem active={location.pathname.startsWith('/buyers')} path={'/buyers'} name={'Buyers'}/>
          {isAuthenticated ? <NavItem active={location.pathname.startsWith('/profile')} path={'/profile'} name={'My Profile'}/> : null}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
