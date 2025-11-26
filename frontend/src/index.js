import React from 'react';
import ReactDOM from 'react-dom/client';
import "./assets/css/layout.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createBrowserRouter } from 'react-router-dom';
import routes from './routes/route.config';
import { RouterProvider } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

// ⬅ ĐỊNH NGHĨA ROUTER BẰNG MẢNG routes
const router = createBrowserRouter(routes);

root.render(
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthContextProvider> 
        <RouterProvider router={router} />
      </AuthContextProvider>
    </GoogleOAuthProvider>
);


reportWebVitals();
