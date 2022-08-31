import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
         Are you struggling to build and market a <span className="purple">software product? </span>
            </h1>
            <p className="home-about-body">
              Do you want to levarage the internet to market your product?
               Your website is your first step!
         But how do you make a website that is highly performant, well branded and SEO optimized?
         Well, you don't have to worry about those questions anymore.
         I'll take the weight of your project off your shoulders  handle it with expertise with little or no effort 
 required from you. At the end, you will get a high-performant and profesionally built software.
 I'll also provideFree ebooks on best SEO practices and copy writing 


I know it's hard to find an expert developer who is actually  motivated to  work with you to develop 
 your website and ship it into production.


 I have helped  hundreds of clients like you to convert their ideas into fully functional websites.


 I will take the weight of the project off your shoulders and I will handle it with expertise with little or no effort 
 required from you. At the end, you will get a high-performant and profesionally built software.

 Having worked with React and Node  for the past 3 years I understand  and implement the best tools and practices
 required to deliver high-performant websites.


 You don't have to worry about maintenance of the website.I will include an easy-to-understand 
 guide on all the features of the website and the source code as part of the delivarables.


 I value deadlines and its my work ethic to work with one client closely without jumping around until we get the job done.

              <br />
              <br />I'm fluent in 
              <i>
                <b className="purple"> Javascript, C++, and Python</b>
              </i>
              <br />
              <br />
 I'm mostly a MERN stack guy. My interests are building &nbsp;
              <i>
                <b className="purple">Web Technologies and Products,Cross-platform Applications</b> and
                also in areas related to{" "}
                <b className="purple">
                 Blockchain and Web3
                </b>
              </i>
              <br />
              <br />
              I spend most of my time working with Javascript libraries,tools,runtimes and frameworks
              like <b className="purple">Node.js</b> 
              <i>
                <b className="purple">
                  {" "}
              Express JS
                </b>
              </i>
              &nbsp;
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/amschel99"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Blackprodigy7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amschel-kariuki-a83b9a230"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
