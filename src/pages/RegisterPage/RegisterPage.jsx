import { Label } from 'pages/LoginPage/LoginPage.styled';
import { useState } from 'react';
import { Button, Form, Input } from './Register.styled';

export const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = () => {};

  const handleSubmit = evt => {
    evt.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Registration</h2>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input
            label="Name"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            required
          />
        </Label>

        <Label>
          Email
          <Input
            label="Email"
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
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
          />
        </Label>

        <Button type="submit">Register</Button>
      </Form>
    </div>
  );
};
