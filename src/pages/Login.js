import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/AuthOperations';
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
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
  const handleSubmit =  e => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    setDisabled(true);
    e.currentTarget.reset();
    toast.success('Logged in successfully! Redirecting to Home Page');
    // setPassword('');
    // setEmail('');
  };
  useEffect(() => {
    if (email && password) setDisabled(false);
  }, [email, password]);

  return (
    <div>
      <h1>Login page</h1>

      <form onSubmit={handleSubmit} autoComplete="off">
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
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
