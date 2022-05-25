import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./Component/About";
import Homepage from "./Component/homepage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
 export default App;