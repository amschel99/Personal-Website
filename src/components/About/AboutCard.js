import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
   Hi, I'm <span className="purple">Amschel </span>from<span className="purple"> Nairobi, Kenya</span>
            <br />
      All things tech interest me

            <br />
            <br />
I enjoy,
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Learning new tech
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
             <li className="about-activity">
              <ImPointRight /> Orgarnizing Tech Events
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "For a bunch of hairless apes, we've actually managed to invent some pretty incredible things"{" "}
          </p>
          <footer className="blockquote-footer"> Ready player 1</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
