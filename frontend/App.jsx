// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Bugs from "./pages/Bugs";

// Option 1: Redirect "/" to "/bugs"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/bugs" replace />} />
        <Route path="/bugs" element={<Bugs />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
