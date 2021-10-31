import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Offcanvas, Form, FormControl, Button, Card, Image, InputGroup, Dropdown} from 'react-bootstrap'

const Navigation = () => {
    return (
      <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
      <Navbar.Brand href="/">Visual Analytics Benchmark Repository</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/benchmarks">Benchmarks</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
      </Navbar>
    );
}

export default Navigation;
