// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ContextProvider } from './Context/ContextProvider';
import Home from './Component/Home';
import Favorites from './Component/Favorites';
import './App.css';

const App = () => {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
};

export default App;
