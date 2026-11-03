
import NavbarComponent from "./Components/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Cart from "./Pages/Cart";
function App() {
  return (
    <Container>
      <Row>
        <Col>
        <NavbarComponent />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Listing" element={<Listing />} />
              <Route path="/Cart" element={<Cart/>}/>
              
      </Routes>
        </Col>
      </Row>
    </Container>

 
    
     

  
  )
}

export default App
