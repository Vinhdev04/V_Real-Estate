// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { routes } from './routes/route.config'; 
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';


import './assets/css/layout.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { Layout,RequireAuth } from './layout/layout';

import NotFound from './pages/NotFound';
function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter> 
        <Routes> 
     
          {routes.map((parentRoute, index) => (
            <Route 
              key={index} 
              path={parentRoute.path} 
              element={parentRoute.element} 
            >
              {/*  Lặp qua các Route con (Public và Private) */}
              {parentRoute.children && parentRoute.children.map((childRoute, childIndex) => (
                <Route 
                  key={childIndex}
                  // Sử dụng index prop cho Trang Chủ (path: '/')
                  index={childRoute.index || false} 
                  path={childRoute.path} 
                  element={childRoute.element}
                />
              ))}
            </Route>
          ))}
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  );
}
export default App;