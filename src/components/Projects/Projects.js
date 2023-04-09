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
        <h4 style={{ fontFamily: 'Comic Sans MS', fontSize: '24px', color: 'orange', fontWeight: 'bold', textAlign: 'center' }}>
  Disclaimer! These are not all my projects! These are the ones I'm proud of and found worthy of putting them here. I have done a lot of projects and if you are interested to see them, go to my GitHub which is 
</h4>
<a style={{ fontFamily: 'Comic Sans MS', fontSize: '24px', color: 'orange', fontWeight: 'bold', textAlign: 'center' }} href="https://github.com/amschel99">https://github.com/amschel99 </a>.
        <h1 className="project-heading">
         Projects that I'm proud of <strong className="purple"> </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my super cool projects!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jyd}
              isBlog={false}
              title="Veestream"
              description="
              A file management API for     efficient file management, such as seamless uploading, downloading and sharing through streamlined development process.
              This API can be used to build video on demand applications, ecommerce applications that need a file management solution to store product images and videos, social media apps, e-learning applications and file sharing applications.
              The API is published on rapidapi and some companies are using it to streamline file management in their applications.
              This is built using Node JS, MongoDB, Microsoft Azure, Nginx and FFMPEG.
              "
              ghLink="https://github.com/amschel99/veestreamApi"
              demoLink="https://veestream.tech"
            />
          </Col>

        
      


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
