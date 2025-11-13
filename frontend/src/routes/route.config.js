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
import SettingsPage from '../features/Profile/components/SettingsPage';

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
    path: '*',
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
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
  {
    path: '/profile',
    element: <Profile />, 
    name: 'Trang cá nhân',
    showInNav: false,
  },
  {
    path: '/profile/edit',
    element: <Profile />, 
    name: 'Chỉnh sửa hồ sơ',
    showInNav: false,
  },
  {
    path: '/profile/favorites',
    element: <NotFound />, 
    name: 'Bất động sản yêu thích',
    showInNav: false,
  },
  {
    path: '/profile/history',
    element: <NotFound />, 
    name: 'Lịch sử xem',
    showInNav: false,
  },
  {
    path: '/profile/settings',
    element: <SettingsPage />, 
    name: 'Cài đặt',
    showInNav: false,
  },
  {
    path: '/auth/login/google',
    element: <LoginGG />, 
    name: 'Đăng nhập Google',
    showInNav: false,
  }
];

export default routes;