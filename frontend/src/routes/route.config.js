

import React from 'react';
import Home from '../pages/Home';
import PropertiesPage from '../pages/PropertiesPage';

import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Trang Chủ',
    showInNav: true,
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
    element: <About />,
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
    path: '*',
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  },
  {
    path: '/auth/login',
    element: <Login />, 
    name: 'Đăng nhập',
    // showInNav: true, 
  },
  {
    path: '/auth/register',
    element: <Register /> ,  
    name: 'Đăng ký',
    // showInNav: true, 
  },
  {
    path: '/profile',
    element: <Profile />, 
    name: 'Trang cá nhân',
    showInNav: true,
  }
 
  
];

export default routes;