import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { signUpThunk } from 'redux/auth/auth-thunk';

function SignUpPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
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
      signUpThunk({
        name,
        email,
        password,
      })
    ) 
    .unwrap()
    .then(() => {
      setName("")
      setEmail("");
      setPassword("");
    })
    .catch(console.log);
  };
  return (
    <Form className="m-3 w-25" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>User Name</Form.Label>
        <Form.Control
          value={name}
          name="name"
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          name="email"
          type="email"
          placeholder="Enter email"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
    </Form>
  );
}

export default SignUpPage;
