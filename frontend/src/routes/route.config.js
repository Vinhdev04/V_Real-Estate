// config route
// 1. route.config.js - File cấu hình routes
import HomePage from '../pages/HomePage';
import PropertiesPage from '../pages/PropertiesPage';
import PropertyDetailPage from '../pages/PropertyDetailPage';
import AboutPage from '../pages/AboutPage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';

export const routes = [
  {
    path: '/',
    element: <HomePage />,
    name: 'Trang Chủ'
  },
  {
    path: '/properties',
    element: <PropertiesPage />,
    name: 'Bất Động Sản'
  },
  {
    path: '/properties/:id',
    element: <PropertyDetailPage />,
    name: 'Chi Tiết Bất Động Sản'
  },
  {
    path: '/about',
    element: <AboutPage />,
    name: 'Về Chúng Tôi'
  },
  {
    path: '/contact',
    element: <ContactPage />,
    name: 'Liên Hệ'
  },
  {
    path: '*',
    element: <NotFoundPage />,
    name: 'Không Tìm Thấy'
  }
];

export default routes;