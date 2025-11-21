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
import Services from '../pages/Services';
import TeamGroup from '../pages/Teams';
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
    name: 'Bất Động Sản',
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
    path: '/team-group',
    element: <TeamGroup />,
    name: 'Đội ngũ sáng lập',
    showInNav: true, 
  },
  {
    path: '/contact',
    element: <Contact />,
    name: 'Liên Hệ',
    showInNav: true, 
  },
  {
    path: '/services',
    element: <Services />, 
    name: 'Dịch vụ',
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

  {
    path: '/auth/login/google',
    element: <LoginGG />, 
    name: 'Đăng nhập Google',
    showInNav: false,
  },

  {
    path: '*',
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  }
];

export default routes;