// features/ProfilePage/ProfilePage.jsx
import React, { useState } from 'react';
import { User, Mail, MapPin, Phone, Calendar, Edit2, Save, X } from 'lucide-react';
import './styles/profile.css';
import { mockUserProfile, mockListings, mockMessages } from './services/mockData.js';

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState(mockUserProfile);
  const [editForm, setEditForm] = useState({...mockUserProfile});
  const [listings] = useState(mockListings);
  const [messages] = useState(mockMessages);

  const handleEdit = () => {
    setIsEditing(true);
    setEditForm({...userProfile});
  };

  const handleSave = () => {
    setUserProfile({...editForm});
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditForm({...userProfile});
  };

  const handleInputChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="profile-page-wrapper">
      <div className="profile-main-content">
        <div className="profile-page-container">
          <div className="profile-grid">
            {/* Left Column - User Info */}
            <div className="user-info-column">
              <div className="profile-card user-info-card">
                <div className="profile-card-header">
                  <h2 className="profile-card-title">Thông tin cá nhân</h2>
                  {!isEditing ? (
                    <button 
                      onClick={handleEdit}
                      className="profile-btn profile-btn-edit"
                    >
                      <Edit2 className="profile-btn-icon" />
                      <span>Chỉnh sửa</span>
                    </button>
                  ) : (
                    <div className="profile-btn-group">
                      <button 
                        onClick={handleSave}
                        className="profile-btn profile-btn-save"
                      >
                        <Save className="profile-btn-icon" />
                        <span>Lưu</span>
                      </button>
                      <button 
                        onClick={handleCancel}
                        className="profile-btn profile-btn-cancel"
                      >
                        <X className="profile-btn-icon" />
                      </button>
                    </div>
                  )}
                </div>

                <div className="profile-avatar-section">
                  <img 
                    src={isEditing ? editForm.avatar : userProfile.avatar} 
                    alt="Avatar" 
                    className="profile-avatar-image"
                  />
                  {isEditing && (
                    <input 
                      type="text"
                      name="avatar"
                      value={editForm.avatar}
                      onChange={handleInputChange}
                      placeholder="URL Avatar"
                      className="profile-input-field"
                    />
                  )}
                </div>

                <div className="profile-info-fields">
                  <div className="profile-info-field">
                    <label className="profile-info-label">
                      <User className="profile-info-icon" />
                      <span>Tên người dùng:</span>
                    </label>
                    {isEditing ? (
                      <input 
                        type="text"
                        name="username"
                        value={editForm.username}
                        onChange={handleInputChange}
                        className="profile-input-field"
                      />
                    ) : (
                      <p className="profile-info-value">{userProfile.username}</p>
                    )}
                  </div>

                  <div className="profile-info-field">
                    <label className="profile-info-label">
                      <Mail className="profile-info-icon" />
                      <span>E-mail:</span>
                    </label>
                    {isEditing ? (
                      <input 
                        type="email"
                        name="email"
                        value={editForm.email}
                        onChange={handleInputChange}
                        className="profile-input-field"
                      />
                    ) : (
                      <p className="profile-info-value">{userProfile.email}</p>
                    )}
                  </div>

                  <div className="profile-info-field">
                    <label className="profile-info-label">
                      <Phone className="profile-info-icon" />
                      <span>Điện thoại:</span>
                    </label>
                    {isEditing ? (
                      <input 
                        type="text"
                        name="phone"
                        value={editForm.phone}
                        onChange={handleInputChange}
                        className="profile-input-field"
                      />
                    ) : (
                      <p className="profile-info-value">{userProfile.phone}</p>
                    )}
                  </div>

                  <div className="profile-info-field">
                    <label className="profile-info-label">
                      <MapPin className="profile-info-icon" />
                      <span>Địa chỉ:</span>
                    </label>
                    {isEditing ? (
                      <input 
                        type="text"
                        name="location"
                        value={editForm.location}
                        onChange={handleInputChange}
                        className="profile-input-field"
                      />
                    ) : (
                      <p className="profile-info-value">{userProfile.location}</p>
                    )}
                  </div>

                  <div className="profile-info-field">
                    <label className="profile-info-label">
                      <Calendar className="profile-info-icon" />
                      <span>Thành viên từ:</span>
                    </label>
                    <p className="profile-info-value">{userProfile.joinDate}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Listings & Messages */}
            <div className="profile-content-column">
              {/* My Listings */}
              <div className="profile-card profile-listings-card">
                <div className="profile-card-header">
                  <h2 className="profile-card-title">Bất động sản của tôi</h2>
                  <button className="profile-btn profile-btn-create">
                    Tạo tin mới
                  </button>
                </div>

                <div className="profile-listings-container">
                  {listings.map((listing, index) => (
                    <div 
                      key={listing.id} 
                      className="profile-listing-item"
                      style={{animationDelay: `${0.2 + index * 0.1}s`}}
                    >
                      <img 
                        src={listing.image} 
                        alt={listing.title}
                        className="profile-listing-image"
                      />
                      <div className="profile-listing-content">
                        <h3 className="profile-listing-title">{listing.title}</h3>
                        <p className="profile-listing-address">
                          <MapPin className="profile-listing-icon" />
                          {listing.address}
                        </p>
                        <p className="profile-listing-price">{listing.price}</p>
                        <div className="profile-listing-details">
                          <span>{listing.bedrooms} phòng ngủ</span>
                          <span>{listing.bathrooms} phòng tắm</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div className="profile-card profile-messages-card">
                <h2 className="profile-card-title">Tin nhắn</h2>
                <div className="profile-messages-container">
                  {messages.map((msg, index) => (
                    <div 
                      key={msg.id} 
                      className="profile-message-item"
                      style={{animationDelay: `${0.3 + index * 0.1}s`}}
                    >
                      <div className="profile-message-content">
                        <img 
                          src={userProfile.avatar} 
                          alt="Avatar" 
                          className="profile-message-avatar"
                        />
                        <div className="profile-message-info">
                          <p className="profile-message-sender">{msg.sender}</p>
                          <p className="profile-message-preview">{msg.preview}</p>
                          <p className="profile-message-time">{msg.time}</p>
                        </div>
                      </div>
                      <button className="profile-message-close">
                        <X className="profile-close-icon" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;