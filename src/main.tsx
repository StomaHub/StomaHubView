import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Libary from './pages/libary';
createRoot(document.getElementById('root')!).render(
   <Router>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/libary' element={<Libary/>}/>
      </Routes>
    </StrictMode>
  </Router>

)
