import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import KhaoulaP from "../../Assets/Projects/leaf.png";
import todo from "../../Assets/Projects/emotion.png";
import Decathling from "../../Assets/Projects/codeEditor.png";
import KOEducation from "../../Assets/Projects/chatify.png";
import Meal from "../../Assets/Projects/suicide.jpeg";
import Portfolio from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Our Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects We've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KOEducation}
              isBlog={false}
              title="KO-Education"
              description=" KO-Education is a webSite for the parents to make sure that thier children are having a healthy mentality, and training them to be good parents.
              by offering so many services for the kids and thier parents."
              link="https://github.com/KhaoulaElma/KOEducation"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={KhaoulaP}
              isBlog={false}
              title="Developpement: IT Classes"
              description="Development. is a website specializing in web and mobile application development. The main field of activity of Development. revolves around the training offered to improve the level of each client. Our main goal is your satisfaction, that is to say, to ensure good communication between the trainers and the people who want to learn."
              link="https://khaoula866.github.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Decathling}
              isBlog={false}
              title="DecathlingBOK"
              description="A website for Decathlon to manage thier planing.
              Based on MVC .Net"
              link="https://github.com/KhaoulaElma/DecathlingBOK"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Meal}
              isBlog={false}
              title="Order Your Meal"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/KhaoulaElma/OrderYourMeal"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              isBlog={false}
              title="Portfolio"
              description="Our personal potfolio page build with React.js and Bootstrap which takes the content from makdown files and renders it using React.js."
              link="https://github.com/KhaoulaElma/PotfolioReact"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To Do Liste"
              description="A simple platform wher you can add all your tasks. This platform helps you to organise all your tasks easily."
              link="https://github.com/KhaoulaElma/ToDoListe"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
