import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import axios from 'axios'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async(e) =>{
        e.preventDefault()
        // const data = await axios.post("http:/localhost:5000/api/login",{
        //     email,
        //     password
        // })
        // console.log(data)

        console.log(email, password)
    }
  return (
    <Container className='mt-5'>

    <Form className=''>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
      <Form.Text className="text-muted mt-5">
        Don't have account ? &nbsp;
        <Link to="/signup" className='link' style={{color:"blue"}}>Signup</Link>
    </Form.Text>

    </Container>
  );
}

export default Login;