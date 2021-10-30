import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 235px;
  margin: 20px 0 25px;
  background-color: rgba(140, 183, 240, 0.3);
  border: 1px solid rgb(140, 183, 240);
  border-radius: 4px;
`;

export const Label = styled.label`
  display: block;
  text-align: center;
  font-weight: 500;
  font-size: 19px;
  margin: 20px 0 0;
  padding: 5px;
`;

export const Input = styled.input`
  display: block;
  width: 225px;
  margin-top: 10px;
  padding: 10px;
  font-size: 17px;
  outline: none;
  border: 1px solid rgb(140, 183, 240);
  border-radius: 4px;

  &:hover,
  &:focus {
    outline: none;
    border: 1px solid dodgerblue;
  }
`;

export const Button = styled.button`
  width: auto;
  height: 40px;
  font-weight: normal;
  font-size: 17px;
  margin: 20px;
  padding: 10px 20px;
  color: #fff;
  background-color: dodgerblue;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  border: none;
  &:hover {
    cursor: pointer;
    background-color: rgb(24, 119, 214);
  }
`;
