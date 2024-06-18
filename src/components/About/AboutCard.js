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
    Studying computer science wasn't something I planned since childhood; it was more of a chance occurrence. In my final year of high school, we had to choose a major for college. Many students chose medicine, civil engineering, or electrical engineering.

As a writer, poet, and filmmaker at heart, I was always captivated by the ability to create new worlds through words or film. Then, animation caught my eye – a way to build worlds and tell stories in a captivating way.

After high school, I weighed my options and decided on computer science. Fast forward, I discovered a love for programming languages like C and assembly. From there, I delved into web development, servers, frontend technologies, and more (including Node.js). I even landed some jobs and started working as a full-stack developer. I built a dating app, a mental health app, and more.

Cryptography always intrigued me, but it seemed daunting. I tried reading massive books on the subject, but the concepts were difficult to grasp. However, my interest remained. To explore low-level programming and keep up with developer debates about the fastest languages, I learned Rust, gaining a powerful tool in my arsenal.

This journey led me to cryptocurrency engineering. I devoured MIT courses, articles about Lamport signatures, consensus mechanisms (PoW, PoS), Merkle trees, and more. I was enthralled by these concepts and even attempted to implement some, like Lamport signatures and Merkle trees.

Then, I discovered Internet Computer Protocol (ICP). Learning about Dominic Williams and the technology behind ICP (ECDSA, etc.) solidified my belief that blockchain was the path for me. Currently, I'm actively building projects within the ICP ecosystem.

We also co-founded a startup called Tefro, which tokenizes digital assets. This required extensive research on token economics, bonding curves, and DAO design. We've successfully completed our beta launch, and I remain fascinated by blockchain technology, particularly the philosophy of a decentralized world, an inclusive economy, and empowering individuals.

My passion lies in a world built on cryptographic truth, and that's where I see my future.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
