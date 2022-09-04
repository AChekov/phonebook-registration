import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
// import { Avatar, Name, Container } from './UserMenu.styled';
// import defaultAvatar from './defaultAvatar.png';
import { IconButton, Menu, MenuItem } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useState } from 'react';

export const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  // const name = useSelector(authSelectors.getUsername);
  // const avatar = defaultAvatar;

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // <Container>
    //   <Avatar src={avatar} alt="avatar" width="28" />
    //   <Name>Welcome, {name}</Name>
    //   <Button type="button" onClick={() => dispatch(authOperations.logOut())}>
    //     Exit
    //   </Button>
    // </Container>
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem onClick={() => dispatch(authOperations.logOut())}>
          Exit
        </MenuItem>
      </Menu>
    </div>
  );
};

export default UserMenu;
