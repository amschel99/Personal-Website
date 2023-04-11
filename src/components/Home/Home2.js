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
  My <span style={{ color: "#b38bff" }}>Specializations</span>
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
  I'm a full-stack developer with a diverse technical skill set and a deep understanding of backend technologies, databases and cloud architecture. I've also honed my proficiency in frontend development using React.js. As a lifelong learner and avid computer science student, I'm always exploring new technologies and techniques to improve the development process and drive business success. With experience in DevOps practices and a strong background in QA testing, I ensure high-quality deliverables that exceed customer expectations. My passion for programming began with my studies in computer science, where I delved into topics ranging from algorithms and data structures to computer architecture and automata theory. I'm constantly building upon that knowledge and applying it to real-world projects. I believe that the key to success in software development lies in a combination of technical expertise and a willingness to embrace change and adapt to new challenges. That's why I approach every project with an open mind and a focus on continuous improvement.
  <br />
  <br />
  I'm also the creator of <span style={{ color: "#b38bff" }}>veestream</span>, a software product for efficient file management, such as seamless uploading, downloading and sharing through streamlined development process. <a style={{textDecoration: "none", color: "yellow"}} href="https://veestream.tech">Visit veestream</a>
  <br />
  <br />
</p>

          </Col>
          <Col md={4} classNameName="myAvtar">
            <Tilt>
              <img src={myImg} classNameName="img-fluid" alt="avatar" />
            </Tilt>
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

Are you a skilled developer struggling to turn your expertise into financial gain? It's not just technical skills you need to succeed in the rapidly-evolving digital landscape. With my newsletter, you'll gain valuable knowledge on how to build a successful SAAS, monetize open-source projects, and much more. Each issue features practical tips and informative articles to help you take your career to the next level. Don't miss out on this opportunity to transform your skills into a thriving business. Subscribe now and let's achieve your goals together.
 

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
            }}>FIND ME ON</h1>
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
