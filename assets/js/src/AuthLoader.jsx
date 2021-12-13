import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser, selectUser, selectIsAuthenticated } from './features/auth/authSlice';

const LoggedOutItems = () => {
  return (
    <div>
      <a className='btn btn-primary m-2' href='/users/register'>Register</a>
      <a className='btn btn-primary m-2' href='/users/log_in'>Log In</a>
    </div>
  )
}

const LoggedInItems = (user) => {
  return (
    <div>
      <span className=''>Logged in as: {user.name}</span>
      <a className='btn btn-primary m-2' href='/users/log_in'>Log Out</a>
    </div>
  )
}

const AuthLoader = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const loggedIn = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const currentUserId = document.getElementById('current-user-id');
    const currentUserEmail = document.getElementById('current-user-email');

    if (currentUserId && currentUserEmail) {
      const currentUser = { id: parseInt(currentUserId.textContent), email: currentUserEmail.textContent };
      dispatch(setUser(currentUser));
    }
  }, []);

  return (
    <div className='col-4'>
      {loggedIn ? <LoggedInItems user={user}/> : <LoggedOutItems />}
    </div>
  )
}

export default AuthLoader;