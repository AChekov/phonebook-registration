import { Container, Header } from './Layout.styled';
import { UserNav } from 'components/Navigation/UserNav';

export const Layout = () => {
  return (
    <Container>
      <Header>
        <UserNav />
      </Header>
    </Container>
  );
};
