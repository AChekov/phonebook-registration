import { Container, Header } from './Layout.styled';
import { UserNav } from 'components/Navigation/UserNav';
import { AuthNav } from 'components/Navigation/AuthNav';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

export const Layout = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Container>
      <Header>{isLoggedIn ? <UserNav /> : <AuthNav />}</Header>
    </Container>
  );
};
