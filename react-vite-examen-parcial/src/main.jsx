import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Navega from './components/Navega.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
        <Navega />
    </Router>
  </StrictMode>,
)
