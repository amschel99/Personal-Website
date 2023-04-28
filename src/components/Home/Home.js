import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
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
    marginX:"30%",
  maxWidth: "400px",
};

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
            
                <span className="wave" role="img" aria-labelledby="wave">
                  Welcome to LLW Amschel!
                </span>
              </h1>

         

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              
              </div>


 
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
<div style={{marginY:"50px"}}>
<a href="https://youtube.com/@llwamschel" target="_blank">

  <Button  style={buttonStyle} >
    Take me to the Youtube channel
  </Button>
</a>
</div>
      <Home2 />
    </section>
  );
}

export default Home;
