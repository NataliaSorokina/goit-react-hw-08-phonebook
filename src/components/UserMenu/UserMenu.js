import { useDispatch, useSelector } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import { getUserName } from 'redux/auth/auth-selectors';
import { Wrapper } from './UserMenu.styled';
import { Span } from './UserMenu.styled';
import { Button } from 'components/FormComponents/FormComponents.styled';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  return (
    <Wrapper>
      <Span>{name}</Span>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </Button>
    </Wrapper>
  );
}
