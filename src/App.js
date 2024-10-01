import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Signup from './components/Signup';

function App() {
  return (
    <Router>
      <nav>
      <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/signup">Signup</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />    {/* Home route */}
        <Route path="/about" element={<About />} /> {/* About route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup route */}
      </Routes>
    </Router>
  );
}

export default App;
