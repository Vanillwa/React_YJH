import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/detail">Detail</Nav.Link>
            <Nav.Link as={Link} to="/event">Event</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header