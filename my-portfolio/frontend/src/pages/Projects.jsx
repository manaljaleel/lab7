import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import "../styles.css"; 

function Projects() {
  return (
    <Container className="mt-5">
      <h1 className="text-center fancy-title">My Projects</h1>
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="project-card shadow-lg">
            <Card.Img variant="top" src="https://source.unsplash.com/500x300/?technology,ai" alt="Project Preview"/>
            <Card.Body>
              <Card.Title>TaskMaster AI</Card.Title>
              <Card.Text>
                AI-powered task manager that helps users organize their schedules using intelligent recommendations.
              </Card.Text>
              <Button variant="primary" href="#">View Project</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
