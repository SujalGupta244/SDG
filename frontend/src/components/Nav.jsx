import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import { Link, NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Link to="/" className='link'>
            <Navbar.Brand >SafeMoney</Navbar.Brand>
          </Link>
          <Nav className="me-right">
            <Button variant="outline-success">
              <Link to="/login" className='link'>Login</Link>
            </Button>
          </Nav>

        
        </Container>
      </Navbar>
      
    </>
  );
}

export default ColorSchemesExample;