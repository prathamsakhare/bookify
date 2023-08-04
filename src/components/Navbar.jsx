import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";

const NavbarPage = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="">Home</Nav.Link>
          <Nav.Link href="">Add Listing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
