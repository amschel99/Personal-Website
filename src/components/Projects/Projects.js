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
        
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.licdn.com/dms/image/D4D0BAQE6EXYyFpfSJQ/company-logo_100_100/0/1682578876027?e=1690416000&v=beta&t=b4e6HIsXlcobD703ERDSJPOH0JM0btgeJu9agtX4byo"

              isBlog={false}
              title="Azure blob storage Node JS API"
              description="
A Rest API to interact with Azure blob storage for file uploads and progressive downloads              "
              ghLink="https://github.com/amschel99/azure-file-upload"
              
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""

              isBlog={false}
              title="Vinyl Record video effect creator"
              description="
A Node.js module that utilizes ffmpeg to create vinyl record videos  "
              ghLink="https://github.com/amschel99/vinyl-video-creator"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""

              isBlog={false}
              title="Customer to Business Lipa na Mpesa"
              description="
A Rest API that allows customers to initiate payments to merchants via MPESA simtoolkit push"
              ghLink="https://github.com/amschel99/C2B-LIPA-NA-MPESA"
              
            />
          </Col>
        
      
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath=""

              isBlog={false}
              title="Fast and Quality Image optimizer"
              description="
An API wrapper for sharp which is an efficient image optimizer that compresses images with minimal quality loss and offers ability to convert to multiple formats"
              ghLink="https://github.com/amschel99/imageOptimizer"
              
            />
          </Col>


         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
