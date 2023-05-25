import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Phiphi from './phiphi.jsx';
import Eiffel from './eiffel.jsx';
import Fuji from './fuji.jsx';
import Times from './times.jsx';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/phiphi/:id" element={<Phiphi />} />
        <Route path="/eiffel/:id" element={<Eiffel />} />
        <Route path="/fuji/:id" element={<Fuji />} />
        <Route path="/times/:id" element={<Times />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);