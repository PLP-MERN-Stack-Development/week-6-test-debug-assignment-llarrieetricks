import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bugs from './pages/Bugs';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/bugs" element={<Bugs />} />
        {/* You can add more routes here, like a Home page */}
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
