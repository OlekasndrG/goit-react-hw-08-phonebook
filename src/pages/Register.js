import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/AuthOperations';

export const Registration = () => {
  //   const [name, setName] = useState('');
  //   const [email, setEmail] = useState('');
  //     const [password, setPassword] = useState('');
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const { email, password, name } = state;
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
    console.log(state);
  };
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

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
