import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";

import Type from "./Type";
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

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h5 style={{ paddingBottom: 15 }} className="">
                <span role="img" aria-labelledby="wave">
                  I'm driven by cryptography and blockchain technology. My
                  research focuses on digital signatures and consensus protocols
                  to build secure and trust-minimized web 3.0 products. With a
                  strong background in computer science and a passion for
                  software engineering and cryptography , I actively contribute
                  to ecosystems like Polkadot, Solana, and the Internet
                  Computer, fostering a more decentralized internet.
                </span>
              </h5>

              {/* <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div> */}
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
