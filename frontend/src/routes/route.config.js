// config route
// 1. route.config.js - File cấu hình routes
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';

// create route and export 
export const routes = [
  {
    path: '/',
    element: <HomePage />,
    name: 'Trang Chủ'
  },
  {
    path: '/properties',
    element: "",
    name: 'Bất Động Sản'
  },
  {
    path: '/properties/:id',
    element:"",
    name: 'Chi Tiết Bất Động Sản'
  },
  {
    path: '/about',
    element: "",
    name: 'Về Chúng Tôi'
  },
  {
    path: '/contact',
    element: "",
    name: 'Liên Hệ'
  },
  {
    path: '*',
    element: <NotFoundPage />,
    name: 'Không Tìm Thấy'
  }
];

export default routes;