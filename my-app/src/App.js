import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
function App() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState('')
  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post('/api/login', { username, password }).then((res) => {
        setUser(res.data)
      })


    } catch (err) {
      console.log(err);
    }
  };

  return (
    <> <Form onSubmit={handleSubmit}>
      <Form.Group controlId="username">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter username" value={username} onChange={e => setUsername(e.target.value)} />
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
      {user}
    </>



  );
}

export default App;
