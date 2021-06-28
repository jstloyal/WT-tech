import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import UserAvatar from 'views/account/components/UserAvatar';
import CircularProgress from './CircularProgress';

 
const AdminNavigation = () => {
  const { isAuthenticating, profile } = useSelector(state => ({
    isAuthenticating: state.app.isAuthenticating,
    profile: state.profile
  }));

  return (
    <nav className="navigation navigation-admin">
      <div className="logo">
        <Link to='/admin/dashboard'>
          <h2>ADMIN PANEL</h2>
        </Link>
      </div>
      <ul className="navigation-menu">
        <li className="navigation-menu-item">
          <UserAvatar 
              isAuthenticating={isAuthenticating} 
              profile={profile} 
          />
        </li>
      </ul>
    </nav>
  );
};

export default AdminNavigation;
