import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from './pages/home';
import Libary from './pages/libary';
import Daily from './pages/daily';
import Expert from './pages/expert';
import ProductsPage from './pages/products';
import LoginPage from './pages/login';
import MonitoringPage from './pages/monitoring';
createRoot(document.getElementById('root')!).render(
   <Router>
    <StrictMode>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/libary' element={<Libary/>}/>
        <Route path='/daily' element={<Daily/>}/>
        <Route path='/expert' element={<Expert/>}/>
        <Route path='/products' element={<ProductsPage/>}/>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/monitoring' element ={<MonitoringPage/>}/>
      </Routes>
    </StrictMode>
  </Router>

)
