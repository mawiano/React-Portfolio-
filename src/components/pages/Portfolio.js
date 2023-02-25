import React from "react";
import projectList from "../../utils/projectList";
import { Container, Row, Col, Card } from "react-bootstrap";


export default function Portfolio() {
  return (
    <Container className="text-center mb-5">
      <h1 className="mb-5">My projects</h1>
      <Row>
          {projectList.map((project) => (
            <div key={project.id} className="col-lg-6">
              <Card className="text-center mb-5">
                <Card.Header>
                  <h2>{project.title}</h2>
                </Card.Header>
                <Card.Body>
                    <img
                      alt={project.title}
                      className="img"
                      src={project.image}
                      style={{ margin: "0 auto", objectFit: "cover", objectPosition: "top" }}
                      width="100%"
                      height="300px"
                    />
                    <p>{project.description}</p>
                    <a href={project.link} className="btn btn-primary stretched-link" target="_blank">
                      GitHub Repo
                    </a>
                </Card.Body>
              </Card>
            </div>
          ))}
      </Row>
    </Container>
  );
}