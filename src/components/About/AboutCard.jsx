import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Sahil Pathariya </span>
            a passionate MERN developer hailing from the charming city of<span className="purple">  Bhopal, Madhya Pradesh.</span> <br />
            <br />  I have a unique journey that has taken me from the world of commerce to the exciting realm of Information Technology.
            <br />
            {/* Additionally, I am currently employed as a software developer at
            Juspay.
            <br />
            <br /> */}
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Web-Series
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Sahil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
