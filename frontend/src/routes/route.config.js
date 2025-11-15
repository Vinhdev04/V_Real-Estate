// src/routes/route.config.js

import React from 'react';
import Home from '../pages/Home';
import Properties from '../pages/Properties';
import About from '../pages/About';
import Contact from '../pages/Contact';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Profile from '../pages/Profile';
import LoginGG from '../pages/LoginGG';

export const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Trang Chủ',
    showInNav: true,
  },
  {
    path: '/properties',
    element: <Properties />,
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
    path: '/auth/login',
    element: <Login />, 
    name: 'Đăng nhập',
    showInNav: false, 
  },
  {
    path: '/login',
    element: <Login />, 
    name: 'Đăng nhập',
    showInNav: false, 
  },
  {
    path: '/auth/register',
    element: <Register />,  
    name: 'Đăng ký',
    showInNav: false, 
  },
  {
    path: '/register',
    element: <Register />,  
    name: 'Đăng ký',
    showInNav: false, 
  },
  // Profile Routes - Tất cả sử dụng component Profile chính
  {
    path: '/profile',
    element: <Profile />, 
    name: 'Trang cá nhân',
    showInNav: false,
  },
  {
    path: '/profile/overview',
    element: <Profile />, 
    name: 'Tổng quan',
    showInNav: false,
  },
  {
    path: '/profile/favorites',
    element: <Profile />, 
    name: 'Bất động sản yêu thích',
    showInNav: false,
  },
  {
    path: '/profile/history',
    element: <Profile />, 
    name: 'Lịch sử xem',
    showInNav: false,
  },
  {
    path: '/profile/edit',
    element: <Profile />, 
    name: 'Chỉnh sửa hồ sơ',
    showInNav: false,
  },
  {
    path: '/profile/settings',
    element: <Profile />, 
    name: 'Cài đặt',
    showInNav: false,
  },
  // Auth Routes
  {
    path: '/auth/login/google',
    element: <LoginGG />, 
    name: 'Đăng nhập Google',
    showInNav: false,
  },
  // 404 - Phải để cuối cùng
  {
    path: '*',
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  }
];

export default routes;