import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap'
import logo from './logo.svg';
import { useHistory } from 'react-router-dom';
import './Benchmarks.css';


import { useEffect, useState } from 'react';

import { Component } from 'react';



const Benchmarks = () => {


      let history = useHistory();
      const redirect = (dataToSend) => {
        console.log(dataToSend);
        history.push('/detail')
        history.push({
             pathname: '/detail',
             data: dataToSend,
         });
      }



    const [infoVis, setInfoVis] = useState([]);
    const [other, setOther] = useState([]);
    const [vast, setVast] = useState([]);
    //const data = [];
    const infoVisArr = [];
    const otherArr = [];
    const vastArr = [];
      //api Call
      useEffect(() => {
        fetch('/benchmarks').then(res => res.json()).then(data =>{
          console.log(data.data)
          for(var c =0; c<data.data.length; ++c){
            if(data.data[c].Tag == "InfoVis"){
              //console.log("data is infovis")
              //console.log(data.data[c].Tag);
              //setInfoVis(data.data[c].Tag);
              infoVisArr.push(data.data[c]);
            }
            if(data.data[c].Tag == "Other"){
            //  console.log("data is other")
              //setOther(data.data);
              otherArr.push(data.data[c]);
            }
            if(data.data[c].Tag == "VAST"){
              vastArr.push(data.data[c]);
            //  console.log("data is vast")
              //setVast(data.data);
            }

          }

          setInfoVis(infoVisArr);
          setOther(otherArr);
          setVast(vastArr);

          // console.log("HELLO!!");
          // console.log(infoVis);
          // console.log(other);
          // console.log(vast);
        });


      }, []);
    return (

       <div>

          <Container>
          <div><br /></div>
          <h3 class="benchmarkTitle">Vast Challenges</h3>

          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {vast.map((item, idx) => (
                <Col>
                <Card className="vastChallenges">
                  <Card.Body onClick={() => redirect(item)}>
                  <Card.Text>
                  {item.Title}
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            ))}
          </Row>

          <div><br /></div>
          <h3 class="benchmarkTitle">InfoVis Contests</h3>
          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {infoVis.map((item, idx) => (
                <Col>
                <Card className="infoVis">
                  <Card.Body onClick={() => redirect(item)}>
                  <Card.Text>
                  {item.Title}
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            ))}
          </Row>

          <div><br /></div>
          <h3 class="benchmarkTitle">Other Challenges</h3>
          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {other.map((item, idx) => (
                <Col>
                <Card className="other">
                  <Card.Body onClick={() => redirect(item)}>
                  <Card.Text>
                  {item.Title}
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            ))}
          </Row>
          <div><br /></div>
          <div><br /></div>
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
       </div>


    );

}
export default Benchmarks;

// const Benchmarks = () => {
//     return (
//
//           <h1>Vast Challenges</h1>
//           <Container>
//           <Row xs={1} md={3} className="g-4">
//             {Array.from({ length: 4 }).map((_, idx) => (
//               <Col>
//                 <Card>
//                   <Card.Img variant="top" src={logo} />
//                   <Card.Body>
//                     <Card.Title>Card title</Card.Title>
//                     <Card.Text>
//                       This is a longer card with supporting text below as a natural
//                       lead-in to additional content. This content is a little bit longer.
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//
//
//
//     );
// }
//
// export default Benchmarks;
