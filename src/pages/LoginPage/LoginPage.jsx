import { Button, Form, Label, Input } from './LoginPage.styled';
import { useState } from 'react';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = () => {};

  const handleSubmit = evt => {
    evt.preventDefault();
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
