import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./about.css";
function AboutCard() {
  return (
    <Card
      className="quote-card-view"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1590561623543-e9abf9e3f3b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXRlZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80') center/cover",
      }}
    >
      <Card.Body>
        <p>
 Majored in computer science on a whim during my senior year of high school. Originally drawn to creative pursuits like writing and filmmaking.
Animation sparked an interest in building worlds and storytelling through technology.

Discovered a love for programming languages like C and assembly during my studies.

Gained experience as a full-stack developer, building various applications including dating and mental health apps.

Intrigued by cryptography, I learned Rust for low-level programming and dove into cryptocurrency engineering concepts.

Studied blockchain fundamentals through MIT courses and independent research. Developed a fascination with the technology and its potential for a decentralized future.
 Actively building projects within the Internet Computer Protocol (ICP) ecosystem. Co-founded a startup (Tefro) focused on tokenizing digital assets.

Future Focus: Driven by the idea of a decentralized world built on cryptographic truth. Excited to contribute to a more inclusive and empowering future.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
