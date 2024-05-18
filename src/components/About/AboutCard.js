import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sushobhit Dhara </span>
            from <span className="purple"> Maharashtra, India.</span>
            <br />
            I have recently completed my  Full Stack Developer Course  from NxtWave CCBP 4.0 Certification Program.
            <br />
            I have done Post Graduation Diploma in Industrial Robotics.
            <br />
            I am passionate about my work and always eager to try new things, constantly pushing the boundaries of my skills. 
            This enthusiasm drives me to innovate and stay ahead in the fast-evolving tech landscape.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Marketing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">SUSHOBHIT</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;