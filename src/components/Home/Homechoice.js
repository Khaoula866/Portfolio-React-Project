import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Button from "react-bootstrap/Button";




function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                We are
                <strong className="main-name"> Khaoula EL Mansouri and Khaoula Aissaoui </strong>
              </h1>

            
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
           
          </Row>
          
        </Container>
      </Container>

      <Container className="home-content">
          <Row>
            <Col md={7} className="home-header"> <h1 style={{ paddingBottom: 15 }} className="heading">
          You can Chose One of us here ! 
              </h1></Col></Row>
            </Container>

      <Button variant="primary" href="./Home" >
            Khaoula ELMansouri
          </Button>

          &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          
          <Button  href="/HomeK" >
            Khaoula Aissaoui  &nbsp; 
          </Button>

          <Container className="home-content">
          <Row>
            <Col md={7} className="home-header"></Col></Row>
            </Container>
    </section>
  );
}

export default Home;
