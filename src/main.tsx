import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Libary from './pages/libary';
import Daily from './pages/daily';
createRoot(document.getElementById('root')!).render(
   <Router>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/libary' element={<Libary/>}/>
        <Route path='/daily' element={<Daily/>}/>
      </Routes>
    </StrictMode>
  </Router>

)
