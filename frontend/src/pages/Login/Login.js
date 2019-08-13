import React, { useState } from 'react';
import { Container, Form } from './styles';
import api from '../../services/api';
import logo from '../../assets/logo.svg';

export default function Login({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      username
    });

    const { _id } = response.data;
    history.push(`/dev/${_id}`);
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <img src={logo} alt="tinDev" />
        <input
          placeholder="Type your GitHub username"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Login</button>
      </Form>
    </Container>
  );
}
