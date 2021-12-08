import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser, selectUser, selectIsAuthenticated } from './features/auth/authSlice';

export default AuthLoader = () => {
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
    <div>
      <span>React knows if you're logged in:</span>
      {loggedIn ? `Logged in as ${user.email}` : `Not logged in`}
    </div>
  )
}
