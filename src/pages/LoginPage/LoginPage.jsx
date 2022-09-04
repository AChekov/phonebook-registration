import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Form, Label } from './LoginPage.styled';
// import FormControl from '@mui/material/FormControl';
// import InputLabel from '@mui/material/InputLabel';
// import OutlinedInput from '@mui/material/OutlinedInput';
// import InputAdornment from '@mui/material/InputAdornment';
// import IconButton from '@mui/material/IconButton';
// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Button, TextField } from '@mui/material';
// import TextField from '@mui/material/TextField';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [values, setValues] = useState({
  //   amount: '',
  //   password: '',
  //   weight: '',
  //   weightRange: '',
  //   showPassword: false,
  // });

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = event => {
  //   event.preventDefault();
  // };

  return (
    <div>
      <h2>Enter your Phonebook</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Name"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </Label>
        <Label>
          <TextField
            id="outlined-basic"
            variant="outlined"
            size="small"
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="at least 7 characters"
            required
          />
        </Label>

        <Button variant="contained" type="submit">
          Sing in
        </Button>
      </Form>
    </div>
  );
};

export default LoginPage;
