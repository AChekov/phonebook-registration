import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Container } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);

  return (
    <Container>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </button>
    </Container>
  );
};

export default UserMenu;
