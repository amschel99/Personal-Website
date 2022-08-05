import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jyd from "../../Assets/Projects/jyd.png";
import tasks from "../../Assets/Projects/tasks.png";
import component from "../../Assets/Projects/component.png";
import chess from "../../Assets/Projects/chess.png";
import chatly from "../../Assets/Projects/CHATLY.png";
import techlify from "../../Assets/Projects/techlify.png";

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
              imgPath={jyd}
              isBlog={false}
              title="JYD SHOPPERS"
              description="Ecommerce website with features like search, sort and pagination. The backend is built using EXPRESS JS and MongoDb while the frontend is built using React JS. In addition, JsonWebTokens have been used for authentication and authorization"
              ghLink="https://github.com/amschel99/how-to-frontend"
              demoLink="https://how-to-frontend.vercel.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="2 player Chess"
              description="A 2 player chess web app built using class components and ES6 classes.ES6 classes have been used for chess pieces. Piece is a parent class to which King, Queen, Bishop, Knight, Rook and Pawn extend. Board of squares is filled with these pieces and null.

Game component maintains the board of squares filled with pieces, and handles turn and move of both players.

Each piece implements isMovePossible(src, dest) and getSrcToDestPath(src, dest) methods which Game uses to identify legality of move and to render UI accordingly."
              ghLink="https://github.com/amschel99/twoPlayer-chess.git"
              demoLink="https://chess-amschel.netlify.app"
            />
          </Col>
      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasks}
              isBlog={false}
              title="Task Manager "
              description="A full stack task manager application that allows users to add tasks, update tasks, delete tasks and label tasks as completed. It is built using Express Js and MongoDB.Static files are  served from  the public folder which has the client side logic. The application is deployed on heroku"
              ghLink="https://github.com/amschel99/amschel-tasks.git"
              demoLink="https://amschel-tasks.herokuapp.com"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={techlify}
              isBlog={false}
              title="Techlify"
              description="A mobile responsive web design agency portfolio website made using bootstrap 5. It is a one page website with sections like Services, Team, About us and Contact Us."
              ghLink="https://github.com/amschel99/Techlify.gitI"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={component}
              isBlog={false}
              title="React Component Library "
              description="A React component library made using Storybook. There are components like buttons, links, caraousel,Navbars in different sizes. i.e small, medium and large. The library is published on npm and can be consumed by any React frontend."
              ghLink="https://github.com/amschel99/react-ui.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatly}
              isBlog={false}
              title="Chatly"
              description=" A real time React chat application which supports text messages, audio and real time video chat. It is built using Websockets, Socket io, WebRTC and Firebase. It also supports real time  file sharing"

              ghLink="https://github.com/amschel99/Chatly.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
