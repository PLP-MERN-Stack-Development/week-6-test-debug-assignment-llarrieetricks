import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Bugs from "./pages/Bugs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bugs" element={<Bugs />} />
        {/* Add more routes here */}
      </Routes>
    </Router>
  );
}

export default App;
