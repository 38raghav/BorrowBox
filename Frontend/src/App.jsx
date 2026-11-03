import NavbarComponent from "./Components/Navbar"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import CreateYourListing from "./Pages/CreateYourListing";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Cart from "./Pages/Cart";

function App() {
  return (

     
       
      <>
        <NavbarComponent />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CreateYourListing" element={<CreateYourListing />} />
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="/Signup" element={<SignupPage />}/>
              <Route path="/Login" element={<LoginPage />}/>
      </Routes>
      </>
    
     
   
 
    
     

  
  )
}

export default App
