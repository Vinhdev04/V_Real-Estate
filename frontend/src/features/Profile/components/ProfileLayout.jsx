// src/pages/Profile.jsx

import { useEffect, useContext } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom'; // ⬅️ IMPORT THÊM 'Outlet'
import { menuItems } from '../services/handlePage'; // Không cần import 'renderContent' nữa
import '../styles/profile.css';
import { AuthContext } from '../../../context/AuthContext';
export default function Profile() {
    const navigate = useNavigate();
    const location = useLocation();
    const { setCurrentUser } = useContext(AuthContext);

    // path.split('/').pop() sẽ lấy phần cuối cùng của URL (edit, favorites,...)

    const pathSegments = location.pathname
        .split('/')
        .filter((segment) => segment !== '');
    const activeTab = pathSegments[pathSegments.length - 1] || 'profile';

    const handleTabChange = (tab) => {
        const routes = {
            profile: '/profile',
            edit: '/profile/edit',
            favorites: '/profile/favorites',
            history: '/profile/history',
            settings: '/profile/settings'
        };
        navigate(routes[tab]);
    };

    // Logout handler
    const handleLogout = () => {
        setCurrentUser(null);
        navigate('/auth/login');
    };

    return (
        <div className='profile-page'>
            <div className='container profile-page__container'>
                <div className='profile-content'>
                    <Outlet />
                </div>
            </div>

            <div className='d-lg-none profile-mobile-logout'>
                <button
                    onClick={handleLogout}
                    className='profile-mobile-logout__btn'
                >
                    <span>🚪</span>
                    <span>Đăng xuất</span>
                </button>
            </div>
        </div>
    );
}
