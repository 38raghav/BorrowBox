
import NavbarComponent from "./Components/Navbar"

import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import CreateYourListing from "./Pages/CreateYourListing";
import LoginPage from "./Pages/LoginPage";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
    <NavbarComponent />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CreateYourListing" element={<CreateYourListing />} />
              <Route path="/Cart" element={<Cart/>}/>
              <Route path="/Signup" element={<h1>Signup Page</h1>}/>
              <Route path="/Login" element={<LoginPage/>}/>
      </Routes>
     

    </>
  )
}

export default App
