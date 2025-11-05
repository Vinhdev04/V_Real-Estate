// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './shared/components/Navbar/Navbar';
// import Footer from './shared/components/Footer/Footer';

// Pages
import HomePage from './pages/HomePage';
import PropertiesPage from './pages/PropertiesPage';
// import PropertyDetailPage from './pages/PropertyDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Styles
import './assets/css/layout.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="layout d-flex flex-column min-vh-100">
        {/* Navbar - Hiển thị trên tất cả các trang */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow-1">
          <Routes>
          
            <Route path="/" element={<HomePage />} />

           
            {/* <Route path="/properties" element={<PropertiesPage />} /> */}
            {/* <Route path="/properties/:id" element={<PropertyDetailPage />} /> */}

            
            <Route path="/about" element={<AboutPage />} />

         
            <Route path="/contact" element={<ContactPage />} />

            
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;