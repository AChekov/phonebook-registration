import { Input } from 'components/ContactForm/ContactForm.styled';
import { useState } from 'react';

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
      <form onSubmit={handleSubmit} autoComplete="off">
        <Input
          label="Name"
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          placeholder="Name Surname"
          required
        />

        <Input
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          placeholder="example@mail.com"
          required
        />

        <Input
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          placeholder="at least 8 chars, numbers and letters"
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
