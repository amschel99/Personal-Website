import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import './about.css'
function AboutCard() {
  return (
    <Card className="quote-card-view" style={{background: "linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1590561623543-e9abf9e3f3b3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3RyYXRlZ3l8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80') center/cover"}}>
      <Card.Body>
        <blockquote className="blockquote mb-0" style={{color: "white"}}>
        <p style={{ textAlign: "justify" }}>
        <span style={{ fontFamily: 'Roboto', fontSize: '20px', fontWeight: 'bold', color: '#FF6B6B' }}> I am Amschel,</span>
      <span style={{ fontFamily: 'Montserrat', fontSize: '18px', color: '#BFBFBF', fontStyle: 'italic' }}> from </span>
      <span style={{ fontFamily: 'Montserrat', fontSize: '18px', color: '#BFBFBF', fontStyle: 'italic' }}>Nairobi, Kenya</span>
      <span style={{ 
  display: 'inline-block',
  width: '30px',
  height: '30px',
  backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 128 128\'%3E%3Cpath fill=\'%23E84A5F\' d=\'M89.5 56c-3-14-14-25-28-28l-.5 11c9 2.5 16.5 10 19 19l9-2z\'/%3E%3Cpath fill=\'%23FF847C\' d=\'M65.5 54c-10 0-18 8-18 18s8 18 18 18 18-8 18-18c0-3-.7-6-2-8l-2-2c-4-4-9-6-14-6s-10 2-14 6c-4 4-6 9-6 14s2 10 6 14c4 4 9 6 14 6s10-2 14-6c4-4 6-9 6-14 0-5-2-10-6-14-3.5-3.5-8-5.5-12-5.5zM51.5 56c-3-14-14-25-28-28l-.5 11c9 2.5 16.5 10 19 19l9-2zM79.5 77.5c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5zM51.5 77.5c0 3-2.5 5.5-5.5 5.5s-5.5-2.5-5.5-5.5 2.5-5.5 5.5-5.5 5.5 2.5 5.5 5.5z\'/%3E%3C/svg%3E")',
  animation: 'crabWalk 0.8s infinite steps(3)',
  transformOrigin: '50% 50%'
}}>
</span>




            <br />
            <br />
            I'm fascinated by technology and its endless possibilities. Here are some of my favorite tech-related hobbies:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight />Exploring the latest breakthroughs in AI and machine learning
            </li>
            <li className="about-activity">
              <ImPointRight />Building server side applications with Node js and Rust
            </li>
            <li className="about-activity">
              <ImPointRight />Building cool tech products that solve real problems and monetizing them.
            </li>
            <li className="about-activity">
              <ImPointRight />Helping out buddies with their technical projects or mentorship on how to market their saas products.
            </li>
          </ul>
       
          <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>
            "For a bunch of hairless apes, we've actually managed to invent some pretty incredible things."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>Ready Player One</footer>
          <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic", marginTop: "2rem" }}>
            "The future is already here — it's just not very evenly distributed."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>William Gibson</footer>
          <p style={{ color: "rgb(155, 126, 172)", fontStyle: "italic", marginTop: "2rem" }}>
            "Any sufficiently advanced technology is indistinguishable from magic."{" "}
          </p>
          <footer className="blockquote-footer" style={{ color: "rgb(155, 126, 172)", fontStyle: "italic" }}>Arthur C. Clarke</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
