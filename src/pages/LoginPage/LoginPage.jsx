import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/auth/auth-thunk';

function LoginPage() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const dispatch = useDispatch();

const handleChange = e => {
  const { name, value } = e.target;
  switch (name) {
    case 'email':
      setEmail(value);
      break;
    case 'password':
      setPassword(value);
      break;

    default:
      throw new Error();
  }
}; 
const handleSubmit = e => {
  e.preventDefault();
  dispatch(
    loginThunk({     
      email,
      password,
    })
  ) 
  .unwrap()
  .then(() => {
    setEmail("");
    setPassword("");
  })
  .catch(console.log);
};

  return (
    <Form onSubmit={handleSubmit} className="m-3 w-25">
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} name='email' value={email} type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} name='password' value={password} type="password" placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginPage;
