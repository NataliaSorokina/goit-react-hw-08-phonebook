import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  padding: 0;
  margin: 0 0 25px;
`;

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  padding: 5px;
  font-weight: 500;
  font-size: 18px;
  border: 1px solid rgb(140, 183, 240);
  background-color: rgba(140, 183, 240, 0.3);
`;
