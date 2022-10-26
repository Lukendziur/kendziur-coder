import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import CartWidget from './CartWidget';
import './header.css'

const CustomNavbar = () => {
    const logoStyle = {
        width: 100
      }
     
      
  return (
    <>
     <Navbar className='bt-navbar' expand="lg">
        <Container>          
          <Navbar.Brand href="#home"><img src={`${window.location.origin}/LogoPrincipal.png`} alt="Logo Buy-Art" style={logoStyle} /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href='/collections' className='navLinks'>Home</Nav.Link>
              <Nav.Link href='/collections' className='navLinks'>Collections</Nav.Link>
              <Nav.Link href='/collections' className='navLinks'><CartWidget/></Nav.Link>
              <Nav.Link href='/collections' className='navLinks'>Login</Nav.Link>             

           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default CustomNavbar