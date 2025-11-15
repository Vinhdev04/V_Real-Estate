// src/features/Profile/components/EditProfileTab.jsx
import React from 'react';
import { Save } from 'lucide-react';
import '../styles/editProfile.css';

const EditProfileTab = ({ userData, setUserData, onSave, onCancel }) => {
  const handleInputChange = (field, value) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Chỉnh sửa hồ sơ</h2>
      </div>
      
      <div className="edit-profile-form">
        <div className="edit-avatar-section">
          <img src={userData.avatar} alt="Avatar" className="edit-avatar" />
          <button className="btn btn-secondary">Tải ảnh lên</button>
          <p className="avatar-note">JPG, PNG hoặc GIF. Kích thước tối đa 2MB</p>
        </div>
        
        <div className="edit-form-grid">
          <div className="form-field">
            <label className="form-label">Họ và tên *</label>
            <input 
              type="text" 
              className="form-input"
              value={userData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Email *</label>
            <input 
              type="email" 
              className="form-input"
              value={userData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Số điện thoại *</label>
            <input 
              type="tel" 
              className="form-input"
              value={userData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
            />
          </div>
          
          <div className="form-field">
            <label className="form-label">Ngày sinh</label>
            <input 
              type="date" 
              className="form-input"
              value={userData.birthDate || ''}
              onChange={(e) => handleInputChange('birthDate', e.target.value)}
            />
          </div>
          
          <div className="form-field full-width">
            <label className="form-label">Địa chỉ</label>
            <input 
              type="text" 
              className="form-input"
              value={userData.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </div>
          
          <div className="form-field full-width">
            <label className="form-label">Giới thiệu bản thân</label>
            <textarea 
              className="form-textarea"
              rows="4"
              value={userData.bio || ''}
              onChange={(e) => handleInputChange('bio', e.target.value)}
              placeholder="Tôi đang tìm kiếm căn hộ cao cấp tại khu vực trung tâm thành phố..."
            />
            <span className="char-count">{(userData.bio || '').length}/500 ký tự</span>
          </div>
        </div>
        
        <div className="form-actions">
          <button className="btn btn-primary" onClick={onSave}>
            <Save size={18} />
            Lưu thay đổi
          </button>
          <button className="btn btn-secondary" onClick={onCancel}>
            Hủy
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfileTab;