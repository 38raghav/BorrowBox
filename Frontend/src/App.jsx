import NavbarComponent from "./Components/Navbar"
import {Route,Routes} from "react-router-dom";
import  SignupPage from "./Pages/SignupPage";
import Listing from "./Pages/Listing";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
    <NavbarComponent />
      <Routes>
              <Route path="/" element={<SignupPage />} />
              <Route path="/Listing" element={<Listing />} />

              <Route path="/Cart" element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
