import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ImPointRight } from "react-icons/im";
import "./about.css";

const projects = [
  {
    name: "Serenity",
    description:
      "An app built with Flutter for helping alcoholic addicts recover. Backend built with Node.js and TypeScript. Worked as a consultant for DV Tech Ventures.",
  },
  {
    name: "Reorg",
    description:
      "A TGE platform on ICP focusing on expert-backed token launches and extensive due diligence to prevent fraudulent token launches. Built fully on ICP using Rust.",
    link: "https://reorg.network",
  },
  {
    name: "Lsig",
    description:
      "An open-source implementation of Lamport signature schemes in Rust. A library for crypto projects to sign transactions.",
    link: "https://crates.io/crates/lsig",
  },
  {
    name: "Veestream",
    description:
      "An API for interacting with Azure Blob Storage for file management, monetized on Rapid API.",
    link: "https://rapidapi.com/art68401/api/veestream2",
  },
  {
    name: "Quick-mongo-seed",
    description:
      "An open-source library for seeding MongoDB in test environments in Node.js, built with TypeScript.",
    link: "https://www.npmjs.com/package/quick-mongo-seed",
  },
  {
    name: "Vinyl Generator",
    description:
      "A Node.js script that uses FFmpeg to create a distinct artistic vinyl effect.",
    link: "https://github.com/amschel99/vinyl-video-creator",
  },
  {
    name: "Mint-cycles",
    description:
      "An open-source project for programmatically converting ICP tokens into cycles on the Internet Computer.",
    link: "https://crates.io/crates/mint-cycles",
  },
];

function AboutCard() {
  return (
    <Container fluid className="about-section">
      <Row>
        {projects.map((project, index) => (
          <Col md={6} lg={4} key={index} className="project-card">
            <Card
              className="quote-card-view"
              style={{
                marginBottom: "20px",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Card.Body>
                <Card.Title>
                  <ImPointRight /> {project.name}
                </Card.Title>
                <Card.Text>{project.description}</Card.Text>
                {index !== 0 && (
                  <Card.Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Learn More
                  </Card.Link>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AboutCard;
