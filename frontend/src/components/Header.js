import React from "react";
import {Link} from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = (props) => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">MOVIE APP</Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="profile">Profile</Nav.Link>
    </Nav>
  </Navbar>

  );
};

export default Header;
