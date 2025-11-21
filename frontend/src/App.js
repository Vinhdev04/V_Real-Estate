// Đường dẫn: src/App.js

import React from 'react';
// Chỉ cần import BrowserRouter, Routes, Route
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { routes } from './routes/route.config'; 
// GoogleAuthProvider đã được import nhưng không dùng, nên xóa 
// import {GoogleAuthProvider} from '@react-oauth/google'; 

// Components
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';
import ContactFloating from './shared/components/ContactFloating/ContactFloating';
// Styles
import './assets/css/layout.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// Tạo một component Layout để bọc Navbar, Footer và phần nội dung động
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
    <ContactFloating/>
    <Footer />
  </div>
);


function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <BrowserRouter> 
        <Layout />
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
}

export default App;