import React from 'react';
import { Mail, Phone, MapPin, Calendar, Edit2, Settings } from 'lucide-react';
import '../styles/profileHeader.css';

const ProfileHeader = ({ userData, onEditClick, onSettingsClick }) => {
  return (
    <div className="profile-header">
      <div className="profile-header-content">
        <img src={userData.avatar} alt="Profile" className="profile-avatar" />
        <div className="profile-info">
          <h1 className="profile-name">{userData.name}</h1>
          <div className="profile-details">
            <span className="profile-detail">
              <Mail size={18} />
              {userData.email}
            </span>
            <span className="profile-detail">
              <Phone size={18} />
              {userData.phone}
            </span>
            <span className="profile-detail">
              <MapPin size={18} />
              {userData.location}
            </span>
            <span className="profile-detail">
              <Calendar size={18} />
              Tham gia từ {userData.joinDate}
            </span>
          </div>
        </div>
        <div className="profile-actions">
          <button className="btn btn-primary" onClick={onEditClick}>
            <Edit2 size={18} />
            Chỉnh sửa
          </button>
          <button className="btn btn-secondary" onClick={onSettingsClick}>
            <Settings size={18} />
            Cài đặt
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;