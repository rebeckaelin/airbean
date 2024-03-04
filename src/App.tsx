import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import Nav from "./pages/NavPage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import StatusPage from "./pages/StatusPage";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/status" element={<StatusPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
