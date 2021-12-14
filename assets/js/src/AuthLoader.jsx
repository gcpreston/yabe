import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setCurrentUser, selectCurrentUser, selectIsAuthenticated } from './features/auth/authSlice';

const AuthLoader = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);
  const loggedIn = useSelector(selectIsAuthenticated);

  useEffect(() => {
    const currentUserId = document.getElementById('current-user-id');
    const currentUserEmail = document.getElementById('current-user-email');
    const currentUserRole = document.getElementById('current-user-role');

    if (currentUserId && currentUserEmail) {
      const currentUser = {
        id: parseInt(currentUserId.textContent),
        email: currentUserEmail.textContent,
        role: currentUserRole.textContent
      };
      dispatch(setCurrentUser(currentUser));
    }
  }, []);

  return null;
}

export default AuthLoader;
