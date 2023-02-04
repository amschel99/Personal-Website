import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import jyd from "../../Assets/Projects/jyd.png";
import tasks from "../../Assets/Projects/meta.jpeg";
import component from "../../Assets/Projects/component.png";
import chess from "../../Assets/Projects/chess.jpeg";


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
              title="Mota Auto"
              description="A web application where sellers can list their cars and buyers can search for cars.Integrated with Azure blob storage for storing image files. Used Azure Cognitive Services to generate image thumbnails for load time optimization.Designed a REST API using Express that serves data to the application from Mongo Database.Used Docker to build an image for my Express API. Integrated The Daraja API and Paypal to receive payments through the platform.Integrated Mapbox API to render interactive maps for seller profiles. Utilized : Javascript,React,Node JS,Express JS,Microsoft Azure,Docker,Daraja API, MapBox."
              ghLink="https://github.com/amschel99/mota"
              demoLink="https://motaauto.live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chess}
              isBlog={false}
              title="AI powered chat bot"
              description="Utilized Open AI’s text completion API and the whatsapp-web.js library to build an interactive bot that can respond intelligently to user
              queries.Incorporated MongoDb for data storage to give the bot the context of the conversation.Deployed the application using Docker."
              ghLink="https://github.com/amschel99/chatAi-Whatsapp"
              
            />
          </Col>
      

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tasks}
              isBlog={false}
              title="Code Topia "
              description="A web based application for students to learn programming in a game-like environment.Integrated in-platform video,audio and text communication using WEBRTC and websockets.Used three js for Game-like interface and overall aesthetic.Incorporated azure blob storage for storing files.Utilized: Node js, Express js, Next js,WEBRTC,Websockets,Microsoft Azure, three.js"
              ghLink="https://github.com/amschel99/codeTopia"
              
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
