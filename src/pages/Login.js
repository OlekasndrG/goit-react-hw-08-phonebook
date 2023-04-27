import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/AuthOperations';
import React from 'react';

import {  LoginForm } from './Login.styled';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value.trim());

        break;
      case 'password':
        setPassword(e.target.value.trim());

        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    setDisabled(true);
    e.currentTarget.reset();
  };
  useEffect(() => {
    if (email && password) setDisabled(false);
  }, [email, password]);

  return (
    <>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <h1>Login page</h1>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={{ marginRight: '29px' }}>
          password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={disabled}>
          Log in
        </button>
      </LoginForm>
    </>
  );
};
