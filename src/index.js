import React from 'react';
import ReactDOM from 'react-dom/client';  // Update import from 'react-dom'
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));  // Create the root element

root.render(
  <Router>  {/* Wrap your App component inside BrowserRouter */}
    <App />
  </Router>
);
