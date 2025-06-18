import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";

import { BrowserRouter as Router } from "react-router-dom";
import Navegation from './components/navBar/navBar';

createRoot(document.getElementById('root')!).render(
   <Router>
    <StrictMode>
      <Navegation/>
    </StrictMode>
  </Router>

)
