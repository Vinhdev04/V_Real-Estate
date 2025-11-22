// components/profile/Settings.jsx
import { useState } from "react";
import "../styles/profile.css"
export default function Settings() {
  const [toggles, setToggles] = useState({
    emailNoti: true,
    smsNoti: false,
    pushNoti: true,
    marketing: false,
    showPhone: true,
    allowMessage: true,
  });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="profile-section">
      <h4 className="profile-section__title">Cài đặt</h4>

      {/* Notifications */}
      <div className="profile-settings__card">
        <h5 className="profile-settings__title">🔔 Thông báo</h5>
        {[
          { key: "emailNoti", label: "Email thông báo", desc: "Nhận thông báo qua email về bất động sản mới" },
          { key: "smsNoti", label: "SMS thông báo", desc: "Nhận tin nhắn SMS về cập nhật quan trọng" },
          { key: "pushNoti", label: "Thông báo đẩy", desc: "Nhận thông báo đẩy trên trình duyệt" },
          { key: "marketing", label: "Email marketing", desc: "Nhận email ưu đãi và tin tức thị trường" },
        ].map(item => (
          <div key={item.key} className="profile-settings__item">
            <div className="profile-settings__item-info">
              <h6>{item.label}</h6>
              <small>{item.desc}</small>
            </div>
            <label className="profile-settings__toggle">
              <input
                type="checkbox"
                checked={toggles[item.key]}
                onChange={() => handleToggle(item.key)}
              />
              <span className="profile-settings__toggle-slider"></span>
            </label>
          </div>
        ))}
      </div>

      {/* Privacy */}
      <div className="profile-settings__card">
        <h5 className="profile-settings__title">🔒 Quyền riêng tư</h5>
        <div className="profile-settings__item">
          <div className="profile-settings__item-info">
            <h6>Hiển thị hồ sơ</h6>
          </div>
          <select className="profile-form__select" style={{width: '50%'}}>
            <option>Công khai</option>
            <option>Bạn bè</option>
            <option>Chỉ mình tôi</option>
          </select>
        </div>
        {[
          { key: "showPhone", label: "Hiển thị thông tin liên hệ", desc: "Cho phép người khác xem số điện thoại và email" },
          { key: "allowMessage", label: "Cho phép tin nhắn", desc: "Nhận tin nhắn từ người dùng khác" },
        ].map(item => (
          <div key={item.key} className="profile-settings__item">
            <div className="profile-settings__item-info">
              <h6>{item.label}</h6>
              <small>{item.desc}</small>
            </div>
            <label className="profile-settings__toggle">
              <input
                type="checkbox"
                checked={toggles[item.key]}
                onChange={() => handleToggle(item.key)}
              />
              <span className="profile-settings__toggle-slider"></span>
            </label>
          </div>
        ))}
      </div>

      {/* Display & Search Options */}
      <div className="row g-4">
        <div className="col-md-6">
          <div className="profile-settings__card">
            <h5 className="profile-settings__title">🌍 Hiển thị</h5>
            <div className="profile-form__group">
              <label className="profile-form__label">Ngôn ngữ</label>
              <select className="profile-form__select">
                <option>Tiếng Việt</option>
              </select>
            </div>
            <div className="profile-form__group">
              <label className="profile-form__label">Đơn vị tiền tệ</label>
              <select className="profile-form__select">
                <option>VND (đ)</option>
              </select>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="profile-settings__card">
            <h5 className="profile-settings__title">🔍 Tùy chọn tìm kiếm</h5>
            <div className="profile-form__group">
              <label className="profile-form__label">Khu vực mặc định</label>
              <select className="profile-form__select">
                <option>TP. Hồ Chí Minh</option>
              </select>
            </div>
            <div className="profile-form__group">
              <label className="profile-form__label">Khoảng giá mặc định</label>
              <select className="profile-form__select">
                <option>Tất cả</option>
              </select>
            </div>
            <div className="profile-form__group">
              <label className="profile-form__label">Loại hình mặc định</label>
              <select className="profile-form__select">
                <option>Tất cả</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="profile-form__actions" style={{justifyContent: 'center', marginTop: '3rem'}}>
        <button className="profile-form__btn profile-form__btn--primary text-primary">
          Lưu cài đặt
        </button>
        <button className="profile-form__btn profile-form__btn--secondary">
          Đặt lại mặc định
        </button>
      </div>
    </div>
  );
}
