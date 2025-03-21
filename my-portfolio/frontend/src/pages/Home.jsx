import { Container, Button } from "react-bootstrap";
import "../styles.css"; 

function Home() {
  return (
    <Container className="home-container">
      <h1>Welcome to My Portfolio</h1>
      <p>Discover my projects and skills.</p>
      <Button variant="primary" href="/projects">View Projects</Button>
    </Container>
  );
}

export default Home;
