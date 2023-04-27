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
        
        <p style={{ color: "white" }}>
          Here are some of the things I've built.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://media.licdn.com/dms/image/D4D0BAQE6EXYyFpfSJQ/company-logo_100_100/0/1682578876027?e=1690416000&v=beta&t=b4e6HIsXlcobD703ERDSJPOH0JM0btgeJu9agtX4byo"

              isBlog={false}
              title="Veestream"
              description="
          Veestream is built for developers and it offers an efficient way to handle files when building web applications that require file management. It offers a set of versatile features that can be used to build highly efficient file management work flows and Video/Audio on demand applications. 
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
