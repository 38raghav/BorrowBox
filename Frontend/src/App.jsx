import NavbarComponent from "./Components/Navbar"
import {Route,Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Listing from "./Pages/Listing";
import Cart from "./Pages/Cart";
function App() {
  return (
    <>
    <NavbarComponent />
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Listing" element={<Listing />} />
              <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
