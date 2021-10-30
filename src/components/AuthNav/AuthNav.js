import React from 'react';
import { NavigLink } from 'components/AuthNav/AuthNav.styled';
import { Wrapper } from './AuthNav.styled';

export default function AuthNav() {
  return (
    <Wrapper>
      <NavigLink to="/register" exact>
        {' '}
        Registration{' '}
      </NavigLink>
      <NavigLink to="/login" exact>
        {' '}
        Login{' '}
      </NavigLink>
    </Wrapper>
  );
}
