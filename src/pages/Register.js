import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { registerUser } from 'redux/AuthOperations';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import { LoginForm } from './Login.styled';
export const Registration = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = state;
  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const handleChange = e => {
    setState(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(registerUser(state));
    setDisabled(true);
    //  toast.success('Registered successfully! Redirecting to Home Page');
  };

  useEffect(() => {
    if (email && password && name) setDisabled(false);
  }, [email, password, name]);

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <h1>Register</h1>
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label style={{ marginLeft: '4px' }}>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={{ marginRight: '24px' }}>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button type="submit" disabled={disabled}>
          Register
        </button>
      </LoginForm>
    </div>
  );
};
