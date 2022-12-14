import { Link } from './Nav.styled';

export const AuthNav = () => {
  return (
    <nav>
      <Link to="/register">Sign up</Link>
      <Link to="/login">Sign in</Link>
    </nav>
  );
};

export default AuthNav;
