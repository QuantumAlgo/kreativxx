import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import AboutPage from "./Component/About";
import Homepage from "./Component/homepage";
import BlogPage from "./Component/Blog";
import ServicesPage from "./Component/services";
import IndustriesPage from "./Component/Industries";
import PortfolioPage from "./Component/Portfolio";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/contact" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
 export default App;