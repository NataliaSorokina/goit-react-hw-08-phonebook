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

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Section title="Please enter your data">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Name
          <Input type="text" name="name" value={name} onChange={handleChange} />
        </Label>

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

        <Button type="submit">Register</Button>
      </Form>
    </Section>
  );
}
