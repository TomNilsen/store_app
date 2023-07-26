import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

function MyNav() {
  return (
    <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <h1>Real fake store</h1>
        </Navbar.Brand>
        <Nav className="btn-group">
          <Link to="/" className="btn btn-light">
            Home
          </Link>
          <Link to="/checkout" className="btn btn-light">
            Checkout
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default MyNav;
