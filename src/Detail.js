import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap'
import logo from './logo.svg';
import { useLocation } from "react-router-dom";
import { useHistory } from 'react-router-dom'
import { useEffect, useState } from 'react';

import { Component } from 'react';

import {Router, Route} from 'react-router';

const Detail = () => {
    const location = useLocation();

    const [title, setTitle] = useState();
  //  const [challengesTemp, setChallenges] = useState();
  //  setTitle(location.data.Title);
    const challengeData = [];
    const imageData = [];
    //console.log(location.data.Title);

    let history = useHistory();
    const showDescription = (dataToSend) => {
      history.push('/description')
      history.push({
           pathname: '/description',
           data: dataToSend,
       });
    }
    // console.log("printing location data");
    // console.log(location.data);


    // useEffect(() => {
    //   fetch('/benchmarks').then(res => res.json()).then(data =>{
    //       if(location.data.Title == data.data.Title){
    //         console.log(data.data)
    //         setChallenges(data.data);
    //       }
    //   });
    //
    //
    // }, []);

    const [challenges, setChallenges] = useState(() => {
        for(var i=0; i<location.data.Challenges.length; ++i){
          if(location.data.Challenges[i].DataSet != 'None'){
            //console.log(location.data);
            challengeData.push(location.data.Challenges[i]);
            //imageData.push(location.data.Image[i]);
          }
        }

        return challengeData;
        //return challengeData;
    })




    // useEffect(() => {
    //     setTitle(location.data.Title);
    //     fetch('/benchmarks').then(res => res.json()).then(data =>{
    //
    //       console.log(data.data);
    //
    //
    //     });
    //
    // }, []);


    // console.log("printing challenges...");
    // console.log(challenges);
    // console.log(title);

    return (
      <>

      <Container id="challenges">
      <h1>{title}</h1>
      <div id="line"><hr /></div>
      <div><br /></div>
      <Row xs={1} md={3} className="g-4 d-flex align-items-stretch">
        {challenges.map((item, idx) => (
          <Col key={idx} >
            <Card path ={item.URL}>
            <Card.Img variant="top" src={item.Image} />
              <Card.Body onClick={() => showDescription(item)}>
                <Card.Title>{item.Title}</Card.Title>

              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      </Container>

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
      </>
    );
}

export default Detail;
