import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


function NavbarComponent() {
  return (
    <Navbar bg="info" expand="lg" variant='dark' className='mb-5'>
      <Container>
        <Navbar.Brand href="#home">Todoist</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent