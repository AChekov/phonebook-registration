import { Container, Header } from './Layout.styled';
import { UserNav } from 'components/Navigation/UserNav';
import { AuthNav } from 'components/Navigation/AuthNav';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <UserNav />
        <AuthNav />
      </Header>
    </Container>
  );
};
