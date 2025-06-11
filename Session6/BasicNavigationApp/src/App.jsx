import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <div className="navbar">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
