import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const buttonStyle = {
    background: "#FF0000",
    border: "none",
    color: "#FFFFFF",
    fontWeight: "bold",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.25)",
    margin: "10px",
    fontSize: "16px",
    lineHeight: "1.5",
    width: "70%",
    marginX: "30%",
    maxWidth: "400px",
  };

  const bioStyle = {
    lineHeight: "1.6",
    paddingBottom: "15px",
    textAlign: "left",
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h5 style={bioStyle}>
                I'm a passionate blockchain engineer with a deep understanding
                of core concepts like digital signatures, consensus mechanisms,
                and game theory. I leverage this knowledge to design and
                implement innovative solutions on blockchains like:
                <ul>
                  <li>Solana</li>
                  <li>Ethereum</li>
                  <li>ICP</li>
                  <li>Polkadot</li>
                </ul>
                Beyond blockchain, I'm a seasoned software engineer. Prior to
                diving into the world of Web3, I honed my skills building Web2
                solutions for startups. I'm proficient in:
                <ul>
                  <li>TypeScript</li>
                  <li>Node.js</li>
                  <li>React</li>
                  <li>React Native</li>
                  <li>Rust</li>
                </ul>
                I also have experience with cloud platforms like AWS and Azure.
                My expertise extends to tokenomics and launch strategy. I act as
                a trusted advisor to crypto projects, guiding them on token
                design and launch strategies. As the founder of{" "}
                <span style={{ cursor: "pointer" }}>
                  <a style={{ cursor: "pointer" }} href="https://reorg.network">
                    reorg.network
                  </a>
                </span>
                , I'm building a platform that facilitates expert-backed token
                launches, driving innovation in the crypto space.
              </h5>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{
                  maxHeight: "450px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
