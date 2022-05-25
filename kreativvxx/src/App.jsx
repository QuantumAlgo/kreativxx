import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import "./App.css";
import AboutPage from "./Component/About";
import Homepage from "./Component/homepage";
const [linksArray] = ['Home','About','Services','Industries','Blog','Portfolio']

function App() {
  return (
    <div className="App">
      <Navbar links = {linksArray} />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
 export default App;