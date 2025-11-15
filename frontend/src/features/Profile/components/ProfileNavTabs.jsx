// src/features/Profile/components/ProfileNavTabs.jsx
import React from 'react';
import { TrendingUp, Heart, Clock, Edit2, Settings } from 'lucide-react';
import '../styles/profileNav.css';

const ProfileNavTabs = ({ activeTab, onTabChange }) => {
  const tabs = [
    { id: 'overview', label: 'Tổng quan', icon: TrendingUp },
    { id: 'favorites', label: 'Yêu thích', icon: Heart },
    { id: 'history', label: 'Lịch sử xem', icon: Clock },
    { id: 'edit', label: 'Chỉnh sửa hồ sơ', icon: Edit2 },
    { id: 'settings', label: 'Cài đặt', icon: Settings },
  ];

  return (
    <div className="profile-nav">
      {tabs.map(tab => {
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabChange(tab.id)}
          >
            <Icon size={18} />
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default ProfileNavTabs;