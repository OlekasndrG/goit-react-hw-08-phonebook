import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/AuthOperations';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  //     const [password, setPassword] = useState('');
  //   const [state, setState] = useState({ name: '', email: '', password: '' });
  //   const { email, password, name } = state;
  const dispatch = useDispatch();

  const handleChange = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser({ password, email }));
    e.currentTarget.reset();
    // setPassword('');
    // setEmail('');
  };
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

        <button type="submit">Log in</button>
      </form>
    </div>
  );
};
