import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiPython,
  DiDocker,
  DiRust,
  DiEthereum,
  DiTypescript,
} from "react-icons/di";
import { SiSolana } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiRust />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolana />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiEthereum />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiTypescript />
      </Col>
    </Row>
  );
}

export default Techstack;
