import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, We are <span className="purple">Khawla and Khaoula </span>
            from <span className="purple"> Oujda, Morocco.</span>
            <br />We are 4th year students in IT Enengeneering, SUPMTI.
            <br />
            <br />
            Apart from coding, some other activities that we love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Doing scocial activities
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Intil you die, work hard to make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">KK</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
