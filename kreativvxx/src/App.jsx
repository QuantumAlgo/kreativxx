import * as React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import AboutPage from "./Component/About/AboutPage";
import Homepage from "./Component/homepage/Homepage";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}
 export default App;