

import React from 'react';
import HomePage from '../pages/HomePage';
import PropertiesPage from '../pages/PropertiesPage';
// import PropertyDetailPage from '../pages/PropertyDetailPage';
// import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
// import LoginForm from '../pages//Login';
import LoginForm from '../features/Auth/components/Login/LoginForm';
import RegisterForm from '../features/Auth/components/Register/RegisterForm';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    name: 'Trang Chủ',
    showInNav: true, // <-- Hiển thị trên Navbar
  },
  {
    path: '/properties',
    element: <PropertiesPage />,
    name: 'Dự án',
    showInNav: true, 
  },
  {
    path: '/properties/:id',
    element: <NotFound />,
    name: 'Chi Tiết Bất Động Sản',
    showInNav: false, 
  },
  {
    path: '/about',
    // element: <About />,
    name: 'Về chúng tôi', 
    showInNav: true, 
  },
  {
    path: '/contact',
    element: <Contact />,
    name: 'Liên Hệ',
    showInNav: true, 
  },
  {
    path: '/news',
    element: <NotFound />, 
    name: 'Tin tức',
    showInNav: true, 
  },
  {
    path: '/auth/login',
    element: <LoginForm />, 
    name: 'Tin tức',
    showInNav: true, 
  },
  {
    path: '/auth/register',
    element: <RegisterForm /> ,  
    name: 'Tin tức',
    showInNav: true, 
  },
  {
    path: '*',
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  },
];

export default routes;