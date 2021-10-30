import styled from '@emotion/styled';

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
`;

export const Span = styled.header`
  margin-right: 20px;
  text-shadow: 1px 1px 1px #000;
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 550px) {
    & {
      display: none;
    }
  }
`;
