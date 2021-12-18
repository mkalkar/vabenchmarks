import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Navbar, Nav, NavDropdown, Card, Image} from 'react-bootstrap'
import logo from './logo.svg';

import './About.css';

const About = () => {
    return (
       <div>


       <Container>
       <div><br /></div>
       <h3>About Us</h3>
       <div id="line"><hr /></div>
        <Row>
          <Col className="aboutCol">
            <Image className="aboutImage" src="respository.png"/>
              <div><br /></div>
            <h4>The Repository</h4>
            <div><br /></div>
            <p>The Visual Analytics Benchmarks Repository contains resources to improve the evaluation of visual analytics technology. Benchmarks contains datasets and tasks, as well as materials describing the uses of those benchmarks (the results of analysis, contest entries, controlled experiment materials etc.) Most benchmarks contain ground truth described in a solution provided with the benchmark, allowing accuracy metrics to be computed.</p>
          </Col>
          <Col className="aboutCol">
            <Image className="aboutImage" src="contribute.png" />
              <div><br /></div>
            <h4>How to Contribute</h4>
            <div><br /></div>
            <p>To contribute new Benchmarks or suggest the addition of new examples of use of the existing Benchmarks: Please contact Alvitta Ottley</p>
          </Col>
          <Col className="aboutCol">
            <Image className="aboutImage" src="history.png"  />
              <div><br /></div>
            <h4>History of Repository</h4>
            <div><br /></div>
            <p>This repository replaces and extends the Information Visualization Benchmarks Repository started in 2003, with datasets from the InfoVis Contest. Starting in 2006 the VAST Contests and later the VAST Challenges which took place at the IEEE VAST symposium provided the 1st set of Benchmark with ground truth and solutions. Full credit and provenance information is given separately for each benchmark.</p>
            <p>Support for the development of the Repository was provided from 2007 to 2011 by the National Science Foundation under a Collaborative Research Grant to the following three institutions:</p>
            <ul class="aboutList">
              <li>IIS-0713087 Plaisant, Catherine, University of Maryland, College Park</li>
              <li>IIS-0712770 Scholtz, Jean, Battelle Memorial Institute</li>
              <li>IIS-0713198 Grinstein, Georges, University of Massachussetts, Lowell</li>
            </ul>
            <p>Any opinions, findings, and conclusions or recommendations expressed in this material are those of the author(s) and do not necessarily reflect the views of the National Science Foundation.</p>

          </Col>
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

       </div>


    );
}

export default About;
