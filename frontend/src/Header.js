import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <header>
      {user ? (
        <div className="user-profile">
          <img src={user.photoURL} alt={user.displayName} />
          <span>{user.displayName}</span>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </header>
  );
};

export default Header;
