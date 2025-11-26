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
import ProfileOverview from '../features/Profile/components/ProfileOverview';
import EditProfile from '../features/Profile/components/EditProfile';
import Favorites from '../features/Profile/components/Favorites';
import ViewHistory from '../features/Profile/components/ViewHistory';
import Settings from '../features/Profile/components/Settings';

import { Layout, RequireAuth } from '../layout/layout';

export const routes = [
  // ===============================================
  // 1. Route Layout CHUNG (Public Routes)
  // ===============================================
  {
    path: '/',
    element: <Layout/>, 
    name: 'Trang Chủ',
    showInNav: true, 
    children:[
   
      {
        index: true, // index: true tương đương với path: '/' của route cha
        element: <Home />,
        name: 'Trang Chủ',
        showInNav: true, 
      },
  
      {
        path: 'properties', 
        element: <Properties />,
        name: 'Bất Động Sản',
        showInNav: true, 
      },
      {
        path: 'properties/:id', 
        element: <NotFound />,
        name: 'Chi Tiết Bất Động Sản',
        showInNav: false, 
      },
      {
        path: 'about', 
        element: <About />,
        name: 'Về chúng tôi', 
        showInNav: true, 
      },
      {
        path: 'team-group', 
        element: <TeamGroup />,
        name: 'Đội ngũ sáng lập',
        showInNav: true, 
      },
      {
        path: 'contact', 
        element: <Contact />,
        name: 'Liên Hệ',
        showInNav: true, 
      },
      {
        path: 'services', 
        element: <Services />, 
        name: 'Dịch vụ',
        showInNav: true, 
      },
      {
        path: 'news', 
        element: <NotFound />, 
        name: 'Tin tức',
        showInNav: true, 
      },
      // Routes Auth
      { path: 'auth/login', element: <Login />, name: 'Đăng nhập', showInNav: false },
      { path: 'login', element: <Login />, name: 'Đăng nhập', showInNav: false },
      { path: 'auth/register', element: <Register />, name: 'Đăng ký', showInNav: false },
      { path: 'register', element: <Register />, name: 'Đăng ký', showInNav: false },
      { path: 'auth/login/google', element: <LoginGG />, name: 'Đăng nhập Google', showInNav: false},
    ]
  },
  
  // ===============================================
  // 2. Route Layout YÊU CẦU ĐĂNG NHẬP (Private Routes)
  // ===============================================
 {
        element: <RequireAuth/>,
        children: [

            {
                path: '/profile',        
                element: <Profile />,    
                name: 'Trang cá nhân',
                showInNav: false,
                children: [
                   
                    { index: true, element: <ProfileOverview /> }, 
                    
                 
                    { path: 'edit', element: <EditProfile /> },      
                    { path: 'favorites', element: <Favorites /> },  
                    { path: 'history', element: <ViewHistory /> },       
                    { path: 'settings', element: <Settings /> },     
                ]
            },
         
        ]
    },
  
  // ===============================================
  // 3. Route 404 (Không Tìm Thấy Trang) - Bắt buộc phải là top-level
  // ===============================================
  {
    path: '*', 
    element: <NotFound />,
    name: 'Không Tìm Thấy',
    showInNav: false, 
  }
];

export default routes;