import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";

function NavbarComponent() {
  return (
    <>
      <Navbar style={{ backgroundColor:"white"}} variant="dark">
        <Container>
        <Navbar.Brand href="/"className="fw-bold fs-2" style={{ color: "#163B70" }}>
          BorrowBox
        </Navbar.Brand>
        <Form.Control
          style={{width:"250px"}}
          type="search"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <Nav className="me-auto ">
            <Nav.Link as={Link}to="/Home" className="fw-semibold"style={{ color: "black" }}>Home</Nav.Link>
            <Nav.Link as={Link}to="/CreateYourListing" className="fw-semibold"style={{ color: "black" }}>Create Your Listing</Nav.Link>
            <Nav.Link as={Link}to="/Cart"  className="fw-semibold" style={{ color: "black" }}>Cart</Nav.Link>
            <Nav.Link as={Link}to="/Signup"  className="fw-semibold" style={{ color: "black" }}>Signup</Nav.Link>
            <Nav.Link as={Link}to="/Login"  className="fw-semibold" style={{ color: "black" }}>Login</Nav.Link> 
          </Nav>
          
        <Nav.Link as={Link} to="/Cart">
        </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;
