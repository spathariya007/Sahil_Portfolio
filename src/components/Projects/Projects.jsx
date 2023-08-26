import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import blog from "../../Assets/Projects/blog.png";
import dance from "../../Assets/Projects/dance.png";
import suicide from "../../Assets/Projects/suicide.png";
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dance}
              isBlog={false}
              title="TheDanceworx"
              description=" This Dance School Application is fully based on ADMIN Module'in which admin can perform various tasks the backend is built by Spring Boot and the frontend part is developed by by using React.js"
              ghLink="https://github.com/spathariya007/Dance-School-Application"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Gericht"
              description="Welcome to Gericht - a modern, beautifully crafted restaurant application that brings the culinary world to your fingertips. Developed with passion using React.js, JavaScript, HTML, and CSS, Gericht offers a delightful dining experience like no other."
              ghLink="https://github.com/spathariya007/Gericht-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog}
              isBlog={false}
              title="Sahil's-Blog"
              description="Are you ready to dive into the world of insightful and engaging blogging? Explore my latest project, a feature-rich Blog Application built with Node.js and Express.js. This dynamic web application allows users to create, publish, and share their thoughts with the world in an elegant and user-friendly manner."
              ghLink="https://github.com/spathariya007/Blog"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={leaf}
              isBlog={false}
              title="project-card"
              description="Namashkar"
              ghLink=""
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={suicide}
              isBlog={false}
              title="project-card"
              description=" Hello i am"
              ghLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              // imgPath={emotion}
              isBlog={false}
              title="Sahil Pathariya"
              description=""
              ghLink=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
