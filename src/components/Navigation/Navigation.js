import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavigLink } from 'components/Navigation/Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavigLink exact to="/">
        {' '}
        Home{' '}
      </NavigLink>
      {isLoggedIn && (
        <NavigLink exact to="/contacts">
          {' '}
          Contacts{' '}
        </NavigLink>
      )}
    </nav>
  );
};

export default Navigation;
