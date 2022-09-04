import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';
import Navigation from 'components/Navigation/Navigation';
import AuthNav from 'components/Navigation/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
// import { Header } from './AppBar.styled';
import { AppBar, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <AppBar position="static" sx={{ flexGrow: 1 }}>
      <Toolbar>
        <Typography variant="h6" component="span" sx={{ mr: 2, flexGrow: 1 }}>
          My Phonebook
        </Typography>
        {/* <Header> */}
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
        {/* </Header> */}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
