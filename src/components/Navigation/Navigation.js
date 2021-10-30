import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';
import { NavigLink } from 'components/Navigation/Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      {!isLoggedIn ? (
        <NavigLink exact to="/">
          {' '}
          Home{' '}
        </NavigLink>
      ) : (
        <NavigLink exact to="/contacts">
          {' '}
          Contacts{' '}
        </NavigLink>
      )}
    </nav>
  );
};

export default Navigation;
