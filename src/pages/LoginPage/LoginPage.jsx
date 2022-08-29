import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { Button, Form, Label, Input } from './LoginPage.styled';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    dispatch(authOperations.login({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Enter your Phonebook</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@mail.com"
            required
          />
        </Label>
        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </Label>
        <Button type="submit">Sing in</Button>
      </Form>
    </div>
  );
};
