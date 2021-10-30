import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: space-around;

  @media screen and (max-width: 550px) {
    & {
      display: block;
      margin-left: 20px;
    }
  }
`;

export const NavigLink = styled(NavLink)`
  display: inline-flex;
  padding: 12px;
  text-decoration: none;
  font-weight: 600;
  font-size: 24px;
  color: rgb(120, 120, 129);
  text-shadow: 1px 1px 1px #000;

  &.active {
    color: rgb(240, 253, 255);
  }
`;
