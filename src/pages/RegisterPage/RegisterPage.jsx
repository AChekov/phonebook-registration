import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';
import { TextField, Button } from '@mui/material';
import { Form, Label, Error } from './Register.styled';

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const error = useSelector(authSelectors.getUserError);

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          <TextField
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        </Label>

        <Label>
          <TextField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        </Label>

        <Label>
          <TextField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="at least 7 characters"
            required
            id="outlined-basic"
            variant="outlined"
            size="small"
          />
        </Label>

        <Button variant="contained" type="submit">
          Register
        </Button>
        {error && <Error>{error}</Error>}
      </Form>
    </div>
  );
};

export default RegisterPage;
