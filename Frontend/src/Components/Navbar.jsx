import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
function NavbarComponent() {
  return (
    <>
      <Navbar style={{ backgroundColor: "#163B70", paddingTop: "18px", paddingBottom: "18px" }} variant="light" className="shadow-sm">
          <Container fluid className="d-flex justify-content-between align-items-center px-4">

        <Navbar.Brand href="/"className="fw-bold fs-2" style={{ color:"white" }}>
          BorrowBox
        </Navbar.Brand>
        <div className="flex-grow-1 mx-4 mx-md-5" style={{ maxWidth: '600px' }}>
  <Form.Control
    type="search"
    placeholder="Search..."
    className="w-100"
    onChange={(e) => setSearch(e.target.value)}
  />
</div>
        
        <Nav className="d-flex align-items-center" style={{ gap: "20px" }}>
            <Nav.Link as={Link}to="/Home" className="fw-semibold"style={{ color: "white" }}>Home</Nav.Link>
            <Nav.Link as={Link}to="/CreateYourListing" className="fw-semibold"style={{ color: "white" }}>Create Your Listing</Nav.Link>
            <Nav.Link as={Link}to="/Cart"  className="fw-semibold" style={{ color: "white" }}>Cart</Nav.Link>
            <Nav.Link as={Link}to="/Signup"  className="fw-semibold" style={{ color: "white" }}>Signup</Nav.Link>
            <Nav.Link as={Link}to="/Login"  className="fw-semibold" style={{ color: "white" }}>Login</Nav.Link> 
          </Nav>
          
        <Nav.Link as={Link} to="/Cart">
        </Nav.Link>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarComponent;