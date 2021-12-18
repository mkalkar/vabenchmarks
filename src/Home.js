import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
//component did mount with JSON structure
import logo from './logo.svg';

import './App.css';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Navbar, Nav, NavDropdown} from 'react-bootstrap'
import {Offcanvas, Form, FormControl, Button, Card, Image, InputGroup, Dropdown} from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Component } from 'react';

import { useHistory } from 'react-router-dom';




const Home = () => {
  const [currentTime, setCurrentTime] = useState(100);
  const [currentData, setCurrentData] = useState([]);
  const [currentBenchmarks, setCurrentBenchmarks] = useState([]);
  const [miniChallenges, setMiniChallenges] = useState([]);

  //const data = [];
const miniChallengesArr = [];
    //api Call
    useEffect(() => {
      fetch('/time').then(res => res.json()).then(data =>{

        setCurrentTime(data.time);
      });
      fetch('/data').then(res => res.json()).then(data =>{
        setCurrentData(data.data);
      });
      fetch('/benchmarks').then(res => res.json()).then(data =>{

        //console.log("pulling benchmarks")
        //console.log(data.data)
        setCurrentBenchmarks(data.data);
        for(var t=0; t<data.data.length; ++t){
          for(var c=0; c<4; ++c){
              //miniChallengesArr.push(currentBenchmarks[t].Challenges[c]);
              if( (data.data[t].Challenges[c] != null) && (data.data[t].Challenges[c].DataSet != 'None') && data.data[t].Challenges[c].Image != null){
                miniChallengesArr.push(data.data[t].Challenges[c])
              }
          }
        }
        setMiniChallenges(miniChallengesArr);
      });

    //  console.log("here");



    }, []);

    console.log(currentBenchmarks);

    let history = useHistory();
    const redirect = (dataToSend) => {
      history.push('/description')
      history.push({
           pathname: '/description',
           data: dataToSend,
       });
    }

    // useEffect(() => {
    //
    // //
    //
    // }, []);
    console.log(miniChallenges);

    var background = {backgroundSize : 'cover'};
        var textStyle = {
          position: 'absolute',
          top: '40%',
          right: '50%',
          color:'white'
        };


    return (
      <>
        <div id="body">
            <Image className="img-responsive" id="homeImage" src="homePage.jpeg" fluid />
            <h1 id="header" style={textStyle}>Visual Analytics Benchmark Repository</h1>
          <h1>Explore Datasets</h1>
            <br/>
          <Container id="features">
          <Row>
            <Col>
              <h3> Browse </h3>

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
          <div id="line"><hr /></div>

          <br/>

          <Row xs={1} md={3} className="g-4">
            {currentData.map((item, idx) => (
              <Col key={idx}>
                <Card class="box" path ={item.URL}>
                <a href={item.URL} target="_blank"><Card.Img className="cardImage" variant="top" src={item.Image} /></a>
                  <Card.Body class="cardBody">
                    <Card.Title>{item.Title}</Card.Title>

                  </Card.Body>
                </Card>

              </Col>
            ))}
          </Row>

          <div><br /></div>
          <h3>Vast Challenge Datasets</h3>
          <div id="line"><hr /></div>
          <div><br /></div>
          <Row xs={1} md={3} className="g-4">
            {miniChallenges.map((item, idx) => (
              <Col>
                <Card onClick={() => redirect(item)}>
                  <Card.Img className="cardImage" variant="top" src={item.Image} />
                  <Card.Body>
                    <Card.Title class="cardHeader">{item.Title}</Card.Title>
                    <Card.Text>
                      {item.Year}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>







        </Container>

        <br/>
        <Container id="footer" fluid>
          <Row>
            <Col>


            </Col>
            <Col>

              </Col>
              <Col>
                <p> Managed by  Washington University  in St. Louis</p>
                <p> A service of SEMVAST Project</p>
              </Col>
          </Row>

        </Container>
        </div>
      </>
    );
}

// <Row xs={1} md={3} className="g-4">
//   {Array.from({ length: 4 }).map((_, idx) => (
//     <Col>
//       <Card>
//         <Card.Img variant="top" src={logo} />
//         <Card.Body>
//           <Card.Title>Card title</Card.Title>
//           <Card.Text>
//             This is a longer card with supporting text below as a natural
//             lead-in to additional content. This content is a little bit longer.
//           </Card.Text>
//         </Card.Body>
//       </Card>
//     </Col>
//   ))}
// </Row>

export default Home;
