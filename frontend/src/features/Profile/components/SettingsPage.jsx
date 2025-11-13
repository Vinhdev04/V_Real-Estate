// src/features/ProfilePage/pages/SettingsPage.jsx
import React, { useState } from 'react';
import { 
  Lock, 
  Bell, 
  Globe, 
  Eye, 
  Mail,
  Shield,
  Smartphone,
  Save
} from 'lucide-react';
import '../styles/settings.css';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    // Privacy Settings
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    
    // Notification Settings
    emailNotifications: true,
    pushNotifications: true,
    marketingEmails: false,
    propertyAlerts: true,
    messageNotifications: true,
    
    // Language & Region
    language: 'vi',
    timezone: 'Asia/Ho_Chi_Minh',
    
    // Security
    twoFactorAuth: false
  });

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSelectChange = (key, value) => {
    setSettings(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    alert('Cài đặt đã được lưu!');
  };

  return (
    <div className="settings-page">
      <div className="settings-container">
        <div className="settings-header">
          <h1 className="settings-title">Cài đặt</h1>
          <button className="settings-save-btn" onClick={handleSave}>
            <Save size={18} />
            <span>Lưu thay đổi</span>
          </button>
        </div>

        {/* Privacy Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <Eye className="settings-section-icon" />
            <h2 className="settings-section-title">Quyền riêng tư</h2>
          </div>
          
          <div className="settings-group">
            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Hiển thị hồ sơ</label>
                <p className="settings-description">
                  Chọn ai có thể xem hồ sơ của bạn
                </p>
              </div>
              <select 
                className="settings-select"
                value={settings.profileVisibility}
                onChange={(e) => handleSelectChange('profileVisibility', e.target.value)}
              >
                <option value="public">Công khai</option>
                <option value="private">Riêng tư</option>
                <option value="friends">Chỉ bạn bè</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Hiển thị email</label>
                <p className="settings-description">
                  Cho phép người khác xem địa chỉ email của bạn
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.showEmail}
                  onChange={() => handleToggle('showEmail')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Hiển thị số điện thoại</label>
                <p className="settings-description">
                  Cho phép người khác xem số điện thoại của bạn
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.showPhone}
                  onChange={() => handleToggle('showPhone')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Notifications Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <Bell className="settings-section-icon" />
            <h2 className="settings-section-title">Thông báo</h2>
          </div>
          
          <div className="settings-group">
            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">
                  <Mail size={18} className="settings-inline-icon" />
                  Thông báo qua email
                </label>
                <p className="settings-description">
                  Nhận thông báo về hoạt động qua email
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.emailNotifications}
                  onChange={() => handleToggle('emailNotifications')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">
                  <Smartphone size={18} className="settings-inline-icon" />
                  Thông báo đẩy
                </label>
                <p className="settings-description">
                  Nhận thông báo đẩy trên thiết bị của bạn
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.pushNotifications}
                  onChange={() => handleToggle('pushNotifications')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Email marketing</label>
                <p className="settings-description">
                  Nhận email về ưu đãi và khuyến mãi
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.marketingEmails}
                  onChange={() => handleToggle('marketingEmails')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Cảnh báo bất động sản</label>
                <p className="settings-description">
                  Thông báo về bất động sản mới phù hợp với bạn
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.propertyAlerts}
                  onChange={() => handleToggle('propertyAlerts')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Thông báo tin nhắn</label>
                <p className="settings-description">
                  Thông báo khi bạn nhận được tin nhắn mới
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.messageNotifications}
                  onChange={() => handleToggle('messageNotifications')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Language & Region Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <Globe className="settings-section-icon" />
            <h2 className="settings-section-title">Ngôn ngữ & Khu vực</h2>
          </div>
          
          <div className="settings-group">
            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Ngôn ngữ</label>
                <p className="settings-description">
                  Chọn ngôn ngữ hiển thị
                </p>
              </div>
              <select 
                className="settings-select"
                value={settings.language}
                onChange={(e) => handleSelectChange('language', e.target.value)}
              >
                <option value="vi">Tiếng Việt</option>
                <option value="en">English</option>
                <option value="zh">中文</option>
              </select>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Múi giờ</label>
                <p className="settings-description">
                  Chọn múi giờ của bạn
                </p>
              </div>
              <select 
                className="settings-select"
                value={settings.timezone}
                onChange={(e) => handleSelectChange('timezone', e.target.value)}
              >
                <option value="Asia/Ho_Chi_Minh">Việt Nam (GMT+7)</option>
                <option value="Asia/Bangkok">Bangkok (GMT+7)</option>
                <option value="Asia/Tokyo">Tokyo (GMT+9)</option>
                <option value="America/New_York">New York (GMT-5)</option>
              </select>
            </div>
          </div>
        </div>

        {/* Security Section */}
        <div className="settings-section">
          <div className="settings-section-header">
            <Shield className="settings-section-icon" />
            <h2 className="settings-section-title">Bảo mật</h2>
          </div>
          
          <div className="settings-group">
            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">
                  <Lock size={18} className="settings-inline-icon" />
                  Xác thực hai yếu tố
                </label>
                <p className="settings-description">
                  Thêm lớp bảo mật bổ sung cho tài khoản của bạn
                </p>
              </div>
              <label className="settings-toggle">
                <input 
                  type="checkbox"
                  checked={settings.twoFactorAuth}
                  onChange={() => handleToggle('twoFactorAuth')}
                />
                <span className="settings-toggle-slider"></span>
              </label>
            </div>

            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Đổi mật khẩu</label>
                <p className="settings-description">
                  Cập nhật mật khẩu của bạn
                </p>
              </div>
              <button className="settings-btn-secondary">
                Thay đổi
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="settings-section settings-section-danger">
          <div className="settings-section-header">
            <h2 className="settings-section-title">Vùng nguy hiểm</h2>
          </div>
          
          <div className="settings-group">
            <div className="settings-item">
              <div className="settings-item-info">
                <label className="settings-label">Xóa tài khoản</label>
                <p className="settings-description">
                  Xóa vĩnh viễn tài khoản và tất cả dữ liệu của bạn
                </p>
              </div>
              <button className="settings-btn-danger">
                Xóa tài khoản
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;