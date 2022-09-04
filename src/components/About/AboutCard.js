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
        I turn Ideas into products.

            <br />
            <br />
Apart from coding, enjoy
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Watching Tv shows
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading good books
            </li>
             <li className="about-activity">
              <ImPointRight /> Orgarnizing Tech Events
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to be 1% better everyday"{" "}
          </p>
          <footer className="blockquote-footer">Atomic Habits</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
