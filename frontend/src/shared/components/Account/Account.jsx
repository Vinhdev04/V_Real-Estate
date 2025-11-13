// src/shared/components/AccountDropdown/AccountDropdown.jsx
import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  User, 
  Edit, 
  Heart, 
  Clock, 
  Settings, 
  LogOut,
  ChevronDown 
} from 'lucide-react';
import './Account.css';

const Account = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Mock user data - replace with actual user data
  const currentUser = user || {
    name: 'Nguyễn Văn A',
    email: 'nguyenvana@email.com',
    avatar: 'https://i.pravatar.cc/150?img=12'
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    // Add logout logic here
    console.log('Logging out...');
    setIsOpen(false);
  };

  const menuItems = [
    {
      icon: <User size={18} />,
      label: 'Trang cá nhân',
      path: '/profile',
      onClick: () => setIsOpen(false)
    },
    {
      icon: <Edit size={18} />,
      label: 'Chỉnh sửa hồ sơ',
      path: '/profile/edit',
      onClick: () => setIsOpen(false)
    },
    {
      icon: <Heart size={18} />,
      label: 'Bất động sản yêu thích',
      path: '/profile/favorites',
      onClick: () => setIsOpen(false)
    },
    {
      icon: <Clock size={18} />,
      label: 'Lịch sử xem',
      path: '/profile/history',
      onClick: () => setIsOpen(false)
    },
    {
      icon: <Settings size={18} />,
      label: 'Cài đặt',
      path: '/profile/settings',
      onClick: () => setIsOpen(false)
    }
  ];

  return (
    <div className="account-dropdown" ref={dropdownRef}>
      <button 
        className="account-dropdown__trigger"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <img 
          src={currentUser.avatar} 
          alt={currentUser.name}
          className="account-dropdown__avatar"
        />
        <span className="account-dropdown__name d-none d-lg-inline">
          {currentUser.name}
        </span>
        <ChevronDown 
          size={16} 
          className={`account-dropdown__chevron ${isOpen ? 'open' : ''}`}
        />
      </button>

      {isOpen && (
        <div className="account-dropdown__menu">
          <div className="account-dropdown__header">
            <img 
              src={currentUser.avatar} 
              alt={currentUser.name}
              className="account-dropdown__header-avatar"
            />
            <div className="account-dropdown__header-info">
              <p className="account-dropdown__header-name">{currentUser.name}</p>
              <p className="account-dropdown__header-email">{currentUser.email}</p>
            </div>
          </div>

          <div className="account-dropdown__divider"></div>

          <div className="account-dropdown__items">
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className="account-dropdown__item"
                onClick={item.onClick}
              >
                <span className="account-dropdown__item-icon">
                  {item.icon}
                </span>
                <span className="account-dropdown__item-label">
                  {item.label}
                </span>
              </NavLink>
            ))}
          </div>

          <div className="account-dropdown__divider"></div>

          <button 
            className="account-dropdown__logout"
            onClick={handleLogout}
          >
            <span className="account-dropdown__item-icon">
              <LogOut size={18} />
            </span>
            <span className="account-dropdown__item-label">
              Đăng xuất
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default Account;