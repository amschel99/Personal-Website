import React from "react";
import { Container, Row, Col,Form,Button } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { Widget } from '@typeform/embed-react'
import MailchimpForm from "../Mailchimp";
import {
  AiFillGithub,
  AiOutlineTwitter
  
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {

  return (
    <Container style={{marginBottom:"10px"}} fluid classNameName="home-about-section" id="about">
      <Container style={{marginBottom:"10px"}}>
        <Row>
          <Col md={8} classNameName="home-about-description">
          <p style={{ 
  fontSize: "1.2em",
  fontFamily: "Roboto Mono, monospace",
  fontWeight: "bold",
  letterSpacing: "2px",
  marginTop:'5px',
  color: "#fff",
  textTransform: "uppercase",
  marginBottom: "20px",
  textAlign: "center"
}}>
  Welcome <span style={{ color: "#b38bff" }}>to Low Level With Amschel!</span>
</p>
<p style={{ 
  fontFamily: "Montserrat, sans-serif",
  fontSize: "18px",
  lineHeight: "1.6",
  color: "#fff",
  textAlign: "center",
  maxWidth: "800px",
  margin: "0 auto"
}}>
  Lets delve into the technical intricacies of software engineering. From optimizing code and debugging systems to building robust networks and scaling infrastructure, there's always something new to learn and explore here.
  <br />
 
  <br />
</p>

          </Col>
          
        </Row>

<p style={{
  fontFamily: 'Roboto Mono, monospace',
  fontSize: '14px',
  fontWeight: 'bold',
  letterSpacing: '2px',
  color: '#00ffea',
  textTransform: 'uppercase',
  lineHeight: '1.5',
  backgroundColor: '#151515',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 0 20px rgba(0, 255, 234, 0.5)',
  textAlign: 'center'
}}>

Want to stay in the know about all things low-level tech? Our newsletter has got you covered! We scour the web for the latest news, trends, and tutorials, so you don't have to. Plus, subscribers get exclusive access to special offers and events. Join our community of tech enthusiasts and never miss a beat. Sign up now!
 

</p>

    
 <Row style={{marginBottom:'10px'}}>
 <div id="mc_embed_signup" style={{ background: "rgba(12, 8, 24, 0.904)", color: "#fff", padding: "20px", width:'100%' }}>
  <form
    action="https://tech.us9.list-manage.com/subscribe/post?u=19ab3433c4d8fab33df9052d2&amp;id=3af49055ee&amp;f_id=002f22e1f0"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    className="validate"
    target="_blank"
    noValidate
  >
    <div id="mc_embed_signup_scroll">
      <div className="mc-field-group" style={{ marginBottom: "10px" }}>
        <input
          type="email"
          defaultValue=""
          placeholder="Enter your email adress"
          name="EMAIL"
          className="required email"
          id="mce-EMAIL"
          required
          style={{  '::placeholder': { 
      color: '#00ffea' 
    } ,color:"#00ffea", padding: "10px", marginRight: "20px", borderRadius: "5px", border: "none", background: "#555"}}
        />
        <input
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="button"
          style={{borderRadius: "5px", border: "none", background: "black", color: "#fff", cursor: "pointer" , marginTop:"15px", fontSize:"20px", height:'50px'}}
        />
      </div>
    </div>
  </form>
</div>


 </Row>
        
    
       
        <Row style={{
          marginY:"10px",
                    backgroundColor: '#151515',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 0 20px rgba(0, 255, 234, 0.5)',
          textAlign: 'center'
        }}>
          <Col md={12} classNameName="home-about-social">
            <h1 style={{
              marginY:"10px",
              fontFamily: 'Roboto Mono, monospace',
              fontSize: '36px',
              fontWeight: 'bold',
              letterSpacing: '2px',
              color: '#00ffea',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>Find Amschel On</h1>
            <p style={{
              fontFamily: 'Roboto, sans-serif',
              fontSize: '18px',
              fontWeight: 'normal',
              letterSpacing: '1px',
              color: '#ffffff',
              lineHeight: '1.5'
            }}>
              <span style={{color: '#e0ff00', textShadow: '0 0 10px #e0ff00'}}>Connect</span> with me and explore the universe of technology, entrepreneurship, and beyond.
            </p>
            <ul style={{
              listStyle: 'none',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '30px'
            }}>
              <li style={{marginRight: '30px'}}>
                <a
                  href="https://github.com/amschel99"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#00d4ff',
                    textAlign: 'center',
                    lineHeight: '50px',
                    fontSize: '24px',
                    color: '#ffffff',
                    textShadow: '0 0 10px #00d4ff',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  classNameName="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li style={{marginRight: '30px'}}>
                <a
                  href="https://twitter.com/its_amschel"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#ff00d4',
                    textAlign: 'center',
                    lineHeight: '50px',
                    fontSize: '24px',
                    color: '#ffffff',
                    textShadow: '0 0 10px #ff00d4',
                    transition: 'transform 0.3s ease-in-out',
                  }}
                  classNameName="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li style={{marginRight: '30px'}}>
                <a
                  href="https://www.linkedin.com/in/amschel-kariuki-a83b9a230"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'block',
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: '#e0ff00',
                    textAlign: 'center',
                    lineHeight: '50px',
                    fontSize: '24px',
                    color: '#000000',
                    textShadow: '0 0 10px #e0ff00',
                    transition: 'transform 0.3s ease-in-out'
                  }}
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
