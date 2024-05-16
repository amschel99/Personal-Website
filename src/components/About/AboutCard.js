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
          Computers always fascinated me, and as a kid, I dreamt of building
          something amazing like an operating system. That dream led me to
          pursue a bachelor's degree in computer science in December 2019. In my
          first year, C became my favorite language, and I delved into number
          theory and discrete math, laying a strong foundation. My second
          language, high-level assembly (HLA), aimed to give me a deeper
          understanding of how information moves within a computer. While HLA
          wasn't directly applicable, it fueled my curiosity. Java became my
          next focus, and I built desktop applications with JavaFX and Swing.
          During my second year, I embraced web development, mastering
          JavaScript, HTML, CSS, React, TypeScript, and Node.js. This newfound
          skillset allowed me to build my own products within a year, even
          monetizing some APIs on RapidAPI. My first professional role came at a
          startup building a dating app. I served as the frontend developer,
          leveraging React Native to create a cross-platform application. After
          nearly a year, I helped launch the product and even built another app
          for mental health. However, a shift in the founders' vision prompted
          me to move on. Following that, I contracted with established
          companies, helping them automate processes through software
          development. This experience broadened my skillset. My journey then
          took a fascinating turn towards cryptography. I delved into algorithms
          like ECDSA and RSA, explored hash functions, Merkle trees, and Lamport
          signatures. This was a pivotal moment – I knew cryptography was where
          I wanted to focus my career. Cryptography's beauty lies in its
          duality: an art and a powerful tool. It underpins the internet's
          security and paves the way for a decentralized future. In fact,
          cryptography and blockchain are philosophies built on the core
          principle of decentralization. My passion for cryptography has
          manifested in open-source projects. I've ported cryptographic
          algorithms to Rust and even built a simple layer-1 blockchain using
          Proof-of-Work consensus. Research, development, and staying current
          through research papers are my constant companions. I'm particularly
          interested in Solana, Polkadot, and Internet Computer (ICP), as they
          represent the cutting edge of this exciting field.
        </p>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
