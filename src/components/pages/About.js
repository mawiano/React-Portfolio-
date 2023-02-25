import React from "react";
import avatar from "../../assets/avatar.jpg";
import { Col, Container, Row, Card } from "react-bootstrap";

export default function About() {
  return (
    <Container className="text-center">
      <Row>
        <Col>
          <h1>Mariano Rojano</h1>
          <img src={avatar} alt="picture" width="300px" />
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Card className="shadow-sm" style={{ width: "500px" }}>
          <Card.Body>
            <p>
              I am a recent Web Development bootcamp graduate eager to pursue my
              first employment. My background is in social media marketing,
              portrait photography, and automotive photography. As of a recent I
              am a Full Stack Developer with experience using HTML5, CSS3,
              JavaScript, JQuery, Express.js, Node.js, MongoDB, MySQL, NoSQL,
              GraphQL, and Git.
            </p>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
