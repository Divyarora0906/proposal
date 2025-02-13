import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home'; // The main app
import CustomPage from './CustomPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/custom" element={<CustomPage />} />
      </Routes>
    </Router>
  );
};

export default App;
