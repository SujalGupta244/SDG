import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { UserContext } from '../context/context';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const {setUser, setToken, user} = useContext(UserContext)

    if(user){
        <Navigate to="/sdgdata"/>
    }
    const navigate = useNavigate()

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            // const data = await axios.post("http://127.0.0.1:5000/api/login",{
            //     email,
            //     password
            // })
            // setUser(data)
            // setToken(data)
            navigate("/sdgdata")
        } catch (error) {
            setError(error.message)
        }

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
    <Form.Text className="text-muted mt-5">
        {error}
    </Form.Text>

    </Container>
  );
}

export default Login;