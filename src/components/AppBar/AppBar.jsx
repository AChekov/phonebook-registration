import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <Header>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
};

export default AppBar;
