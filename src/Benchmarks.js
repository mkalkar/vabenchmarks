import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card} from 'react-bootstrap'
import logo from './logo.svg';
import { useHistory } from 'react-router-dom';

const Benchmarks = () => {
    let history = useHistory();
    const redirect = () => {
      history.push('/detail')
    }
    return (
       <div>

          <Container>
          <div><br /></div>
          <h3>Vast Challenges</h3>
          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                <Card>
                  <Card.Body onClick={redirect}>
                  <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            ))}
          </Row>

          <div><br /></div>
          <h3>InfoVis Contests</h3>
          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 6 }).map((_, idx) => (
                <Col>
                <Card>
                  <Card.Body>
                  <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            </Card>
            </Col>
            ))}
          </Row>

          <div><br /></div>
          <h3>Other Challenges</h3>
          <div id="line"><hr /></div>
          <Row xs={1} md={3} className="g-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <Col>
                <Card>
                  <Card.Body>
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
