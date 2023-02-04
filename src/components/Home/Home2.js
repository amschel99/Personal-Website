import React from "react";
import { Container, Row, Col,Form,Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Widget } from '@typeform/embed-react'
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
      Hello<span className="purple">there  </span>
            </h1>
            <p className="home-about-body">
            My expertise lies in building web apps using Node and React, and I also have a keen interest in 3D and AI. I'm passionate about programming and strive to stay up-to-date with the latest technology and trends in the software engineering industry. I'm always looking to expand my skillset and solve complex problems. I'm looking forward to collaborating with colleagues and creating innovative solutions.



              <br />
              <br />I also do 
              <i>
               
              </i>
              <br />
              <br />
Check out my blog for my coding content
<span><a href="https://techlia.hashnode.dev"> blog </a></span> &nbsp;
              
              <br />
              <br />
            I  spend most of my time  dabbling with Javascript libraries, tools, runtimes, and frameworks like 

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

   <h2 className="home-about-social">Subscribe to my newsletter</h2>      
 <Row>
<div id="revue-embed">
  <form action="https://www.getrevue.co/profile/dawnofstartups/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="revue-form-group" style={{marginBottom:'5px'}}>
    
    <input style={{outline:'none', border:'none'}} class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
  </div>
  
  <div class="revue-form-actions">
    <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"/>
  </div>

  </form>
</div>


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
                  href="https://twitter.com/amscheltech"
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
