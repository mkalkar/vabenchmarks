import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Offcanvas, Form, FormControl, Button, Card, Image, InputGroup, Dropdown} from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import React, { Component } from 'react';


import Home from './Home';
import About from './About';
import Benchmarks from './Benchmarks';
import Detail from './Detail';
//import Contact from './components/Contact';
// import Error from './components/Error';
import Navigation from './Navigation';
import Description from './Description';
//import pizzas frm ./data
//import {Cards} from './components/Cards'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/benchmarks" component={Benchmarks}/>
             <Route path="/detail" component={Detail}/>
             <Route path="/description" component={Description}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

export default App;
