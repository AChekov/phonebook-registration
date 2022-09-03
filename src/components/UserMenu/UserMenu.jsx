import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { Avatar, Name, Button, Container } from './UserMenu.styled';
import defaultAvatar from './defaultAvatar.png';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const avatar = defaultAvatar;

  return (
    <Container>
      <Avatar src={avatar} alt="avatar" width="28" />
      <Name>Welcome, {name}</Name>
      <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Exit
      </Button>
    </Container>
  );
};

export default UserMenu;
