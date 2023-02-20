import React, { useContext } from 'react'
import { Nav } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/Auth/authContext';

function NavbarComponent() {
  const authContext = useContext(AuthContext);

  const { user, logout } = authContext;

  const logoutHandler = () => {
    logout();
  }

  return (
    <Navbar bg="info" expand="lg" variant='dark' className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">Todoist</Navbar.Brand>
        {user && <div>Hello, {user}</div>}
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to='/'>Home</Nav.Link>
          </Nav.Item>
          {!user && (
            <Nav.Item>
            <Nav.Link as={Link} to='/login'>Login</Nav.Link>
            </Nav.Item>
          )}
          {!user && (
            <Nav.Item>
            <Nav.Link as={Link} to='/register'>Register</Nav.Link>
            </Nav.Item>
          )}
          {user && (
            <Nav.Item>
            <Nav.Link as={Link} to='#' onClick={logoutHandler}>Logout</Nav.Link>
            </Nav.Item>
          )}
          
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent