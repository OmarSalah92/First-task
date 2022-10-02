import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class Naav extends Component {
  render(){
    return ( <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand >Shopping</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
        <Navbar.Brand bg="success" >0</Navbar.Brand>
          
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>)
  }
}

export default Naav