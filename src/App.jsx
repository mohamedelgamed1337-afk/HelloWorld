import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/Products.jsx";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route  path="/" element={<Home />} />
        <Route path="/product" element={<Products />}/>
      </Routes>
    </Router>
  );
}