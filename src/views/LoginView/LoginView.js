import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/auth-operations';
import Section from 'components/Section/Section';
import {
  Form,
  Label,
  Input,
  Button,
} from 'components/FormComponents/FormComponents.styled';

export default function LoginView() {
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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Please enter your data">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Email
          <Input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Label>

        <Label>
          Password
          <Input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </Label>

        <Button type="submit">Enter</Button>
      </Form>
    </Section>
  );
}
