import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  padding: 12px;
  font-weight: 600;
  font-size: 24px;
  text-decoration: none;
  color: rgb(120, 120, 129);
  /* color: rgb(51, 52, 58); */
  text-shadow: 1px 1px 1px #000;
  &:not(:last-child) {
    margin-right: 250px;
  }
  &.active {
    color: honeydew;
  }
`;
