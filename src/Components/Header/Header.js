import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
  return (
    <nav className="fixed-top">
      <Navbar bg="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <h1 className="text-warning">Sports-Beta</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white fw-bold">
                About
              </Nav.Link>
              <Nav.Link href="#link" className="text-white fw-bold">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
};

export default Header;
