import axios from 'axios';
import { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/context';

function Signup() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    

    const {setUser} = useContext(UserContext)
    const navigate = useNavigate()
    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const data = await axios.post("http://127.0.0.1:5000/api/signup",{
                username,
                email,
                password
            })
            
            navigate("/login")
        } catch (error) {
            setError(error.message)
        }

        

        console.log(data)

        console.log(email, password)
    }


  return (
    <Container className='mt-5'>

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
    <Form.Text className="text-muted mt-5">
        Don't have account ? &nbsp;
        <Link to="/login" className='link' style={{color:"blue"}}>Login</Link>
    </Form.Text>
    
    <Form.Text className="text-muted mt-5">
        {error}
    </Form.Text>


    </Container>
  );
}

export default Signup;