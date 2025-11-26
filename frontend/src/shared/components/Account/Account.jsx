// src/shared/components/AccountDropdown/AccountDropdown.jsx
import React, { useState, useRef, useEffect,useContext } from 'react';
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
import axios from 'axios';
import { API_URL_LOGOUT } from '../../../constant/api';
import  { useNavigate } from "react-router-dom";
import {AuthContext} from '../../../context/AuthContext';
import imgDefault from '../../../assets/images/default-user.png';
const Account = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate =  useNavigate();


  const {currentUser,setCurrentUser ,updateUser}= useContext(AuthContext);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (!currentUser) return null; 

  const handleLogout = async() => {
    try {
      await axios.post(`${API_URL_LOGOUT}`);
      updateUser(null);
      navigate("/")
    } catch (error) {
      console.log(error);
    }
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
          src={currentUser.avatar || imgDefault } 
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
              src={currentUser.avatar || imgDefault}
              alt={currentUser.name}
              className="account-dropdown__header-avatar"
            />
            <div className="account-dropdown__header-info">
              <p className="account-dropdown__header-name">{currentUser.username}</p>
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