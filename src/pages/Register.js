import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { registerUser } from 'redux/AuthOperations';
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
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
     toast.success('Registered successfully! Redirecting to Home Page');
  };

  useEffect(() => {
    if (email && password && name) setDisabled(false);
  }, [email, password, name]);

  return (
    <div>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Name
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label>
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
      </form>
      <ToastContainer
        position="top-right"
        autoClose={3252}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};
