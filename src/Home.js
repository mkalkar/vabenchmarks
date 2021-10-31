import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Offcanvas, Form, FormControl, Button, Card, Image, InputGroup, Dropdown} from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Component } from 'react';


const Home = () => {
    return (
      <>
          <Image src={logo}  fluid />

          <h1>Explore Datasets</h1>
          <br/>
          <Container id="features">
          <Row>
            <Col>
              <h3> Feautured </h3>
            </Col>
            <Col>
                <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">Default</InputGroup.Text>
                <FormControl
                  aria-label="Default"
                  aria-describedby="inputGroup-sizing-default"
                />
                </InputGroup>
              </Col>
              <Col>
                <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
              </Col>
          </Row>


          <br/>
          <Row xs={1} md={3} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card>
                  <Card.Img variant="top" src={logo} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a longer card with supporting text below as a natural
                      lead-in to additional content. This content is a little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </Container>

      </>
    );
}


export default Home;
