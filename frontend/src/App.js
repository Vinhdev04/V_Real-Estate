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

// Lưu ý: ĐÃ XÓA GoogleOAuthProvider vì đã có bên index.js

const Layout = () => (
  <div className="d-flex flex-column min-vh-100">
    <Navbar />
    <main className="flex-grow-1">
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </main>
   
    <Footer />
  </div>
);

function App() {
  return (
    <BrowserRouter> 
      <Layout />
    </BrowserRouter>
  );
}

export default App;