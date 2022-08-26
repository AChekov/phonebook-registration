import { Link } from './Nav.styled';

export const UserNav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/contacts">Contacts</Link>
    </nav>
  );
};
