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
      Do you want to build an efficient <span className="purple">web or mobile application?  </span>
            </h1>
            <p className="home-about-body">
           Are you looking for an expert developer who will work closely with you to get that project done? I will work with you right from the requirement gathering phase and  throughout the development to make sure you get a well built and scalable application.
          I build efficient websites and cross platform apps using React JS,React Native and Node JS.



              <br />
              <br />I also do 
              <i>
                <b className="purple"> SEO consulting </b>  to help businesses get  better indexing from search engines.
              </i>
              <br />
              <br />
Check out my blogs on coding, entrepreneurship and startups on my 
<span><a href="https://techlia.hashnode.dev"> blog </a></span> &nbsp;
              
              <br />
              <br />
            I  spend most of my time working with Javascript libraries, tools, runtimes, and frameworks like 

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
