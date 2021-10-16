import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">Notes-zipper</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link>
              <Link to="/mynotes">My Notes</Link>
            </Nav.Link>
            <NavDropdown title="Nikhil Rai" id="basic-nav-dropdown">
              <NavDropdown.Item href="#">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
