

import React from 'react';
import HomePage from '../pages/HomePage';
import PropertiesPage from '../pages/PropertiesPage';
// import PropertyDetailPage from '../pages/PropertyDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

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
    element: <NotFoundPage />,
    name: 'Chi Tiết Bất Động Sản',
    showInNav: false, 
  },
  {
    path: '/about',
    element: <AboutPage />,
    name: 'Về chúng tôi', 
    showInNav: true, 
  },
  {
    path: '/contact',
    element: <ContactPage />,
    name: 'Liên Hệ',
    showInNav: true, 
  },
  {
    path: '/news',
    element: <NotFoundPage />, 
    name: 'Tin tức',
    showInNav: true, 
  },
  {
    path: '*',
    element: <NotFoundPage />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  },
];

export default routes;