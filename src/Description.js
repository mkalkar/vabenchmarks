import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card, Image, Button} from 'react-bootstrap'
import logo from './logo.svg';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom'

import './Description.css';

import { Component } from 'react';

const Description = () => {

  let history = useHistory();

  const location = useLocation();

  console.log("in description");
  console.log(location.data);


    const [data, setData] = useState(() => {
        return location.data;
        //return challengeData;
    })
      //api Call
      useEffect(() => {
        fetch('/benchmarks').then(res => res.json()).then(data =>{

        });


      }, []);
      console.log(data);

      // const showDescription = (dataToSend) => {
      //   history.push('/detail')
      //   history.push({
      //        pathname: '/detail',
      //        data: dataToSend,
      //    });
      // }

      // let history = useHistory();
      // const backListener = history.listen(location => {
      //   if (location.action === "POP") {
      //     console.log("WENT BACK")
      //     // Do your stuff
      //   }
      // });

        // const [ locationKeys, setLocationKeys ] = useState([])
        // const history = useHistory()
        //
        // useEffect(() => {
        //   return history.listen(location => {
        //     if (history.action === 'PUSH') {
        //       console.log("push")
        //       setLocationKeys([ location.key ])
        //     }
        //
        //     if (history.action === 'POP') {
        //       console.log("POP")
        //       if (locationKeys[1] === location.key) {
        //         //setLocationKeys(([ _, ...keys ]) => keys)
        //
        //
        //       } else {
        //         setLocationKeys((keys) => [ location.key, ...keys ])
        //
        //         // Handle back event
        //
        //       }
        //     }
        //   })
        // }, [ locationKeys, ])

    return (
      <>



        <br/>

      <Container >
      <h1>{data.Title}</h1>
      <div id="line"><hr /></div>
      <br/>
        <Row>
          <Col>
            <div class="img-Container"><Image id="image" src={data.Image} /></div>

          </Col>
          <Col>
              <p>{data.Description}</p>
              <p><a href={data.DataSet} target="_blank">Download Dataset</a></p>
              <p><a href={data.Solution} target="_blank">Download Solution</a></p>
          </Col>
        </Row>

      </Container>

      <br/>
      <br/>
      <br/>
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

      </>

    );

}
export default Description;
