import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap'
import logo from './logo.svg';

const Benchmarks = () => {
    return (
       //<div>
          <h1>Vast Challenges<h1>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Card>
                  <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            ))}
          </Row>

       //    <h1>InfoVis Contests</h1>
       //    <p>Other Challenges</p>
       // </div>
    );
}

export default Benchmarks;
