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
import FormLogin from './components/formLogin';
import FormRegistration from './components/formRegistration';
import UserProvider from './context/UserProvider';
import User from './components/user';
import UserPage from './pages/user';
createRoot(document.getElementById('root')!).render(
   <Router>
    <StrictMode>
      {/* envolve a aplicação inteira no contexto e assim vamos acessar o nome do usuario */}
      <UserProvider>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/libary' element={<Libary/>}/>
        <Route path='/daily' element={<Daily/>}/>
        <Route path='/expert' element={<Expert/>}/>
        {/* <Route path='/products' element={<ProductsPage/>}/> */}
        <Route path='/monitoring' element ={<MonitoringPage/>}/>

        {/* Rotas aninhadas para os navegar entre os formulários */}
        <Route path='/login' element={<LoginPage />}>
          <Route index element={<FormLogin />} />
          <Route path='register' element={<FormRegistration />}/>
        </Route>

        <Route path='/user' element ={<UserPage/>} />

      </Routes>

      </UserProvider>
    </StrictMode>
  </Router>

)
