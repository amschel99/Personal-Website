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
         Are you struggling to build and market a <span className="purple">software product? </span>
            </h1>
            <p className="home-about-body">
            Do you want to leverage the internet to market your product? Your website is your first step! But how do you make a website that is scalable, well branded, and SEO optimized? Well, you don't have to worry about those questions anymore. I'll take the weight of your project off your shoulders and handle it with expertise with little or no effort required from you. In the end, you will get highly scalable and professionally built software.



              <br />
              <br />I code in
              <i>
                <b className="purple"> Javascript, Java, C++, and Python</b>
              </i>
              <br />
              <br />
I also talk about Startups, Entrepreneurship and Business in my 
<span><a href="https://techlia.hashnode.dev"> blog. </a></span> &nbsp;
              
              <br />
              <br />
             spend most of my time working with Javascript libraries, tools, runtimes, and frameworks like 

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
<div id="revue-embed">
  <form action="https://www.getrevue.co/profile/amscheltech/add_subscriber" method="post" id="revue-form" name="revue-form"  target="_blank">
  <div class="revue-form-group">
    <label for="member_email">Email address</label>
    <input class="revue-form-field" placeholder="Your email address..." type="email" name="member[email]" id="member_email"/>
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
