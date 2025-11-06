// Đường dẫn: src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes/route.config'; // Import cấu hình

// Components
import Navbar from './shared/components/Navbar/Navbar';
import Footer from './shared/components/Footer/Footer';


// Styles
import './assets/css/layout.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className=" d-flex flex-column min-vh-100">
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
        
       <Footer/>
      </div>
    </Router>
  );
}

export default App;