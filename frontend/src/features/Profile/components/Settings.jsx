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
    <div className="bg-white rounded-4 shadow p-5">
      <h4 className="mb-5">Cài đặt</h4>

      {/* Thông báo */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title text-primary mb-4">🔔 Thông báo</h5>
          {[
            { key: "emailNoti", label: "Email thông báo", desc: "Nhận thông báo qua email về bất động sản mới" },
            { key: "smsNoti", label: "SMS thông báo", desc: "Nhận tin nhắn SMS về cập nhật quan trọng" },
            { key: "pushNoti", label: "Thông báo đẩy", desc: "Nhận thông báo đẩy trên trình duyệt" },
            { key: "marketing", label: "Email marketing", desc: "Nhận email ưu đãi và tin tức thị trường" },
          ].map(item => (
            <div key={item.key} className="d-flex justify-content-between align-items-center py-3 border-bottom">
              <div>
                <h6 className="mb-1">{item.label}</h6>
                <small className="text-muted">{item.desc}</small>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles[item.key]}
                  onChange={() => handleToggle(item.key)}
                  style={{ width: "50px", height: "26px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quyền riêng tư */}
      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <h5 className="card-title text-primary mb-4">🔒 Quyền riêng tư</h5>
          <div className="py-3 border-bottom">
            <h6>Hiển thị hồ sơ</h6>
            <select className="form-select w-50 mt-2">
              <option>Công khai</option>
              <option>Bạn bè</option>
              <option>Chỉ mình tôi</option>
            </select>
          </div>
          {[
            { key: "showPhone", label: "Hiển thị thông tin liên hệ", desc: "Cho phép người khác xem số điện thoại và email" },
            { key: "allowMessage", label: "Cho phép tin nhắn", desc: "Nhận tin nhắn từ người dùng khác" },
          ].map(item => (
            <div key={item.key} className="d-flex justify-content-between align-items-center py-3 border-bottom">
              <div>
                <h6 className="mb-1">{item.label}</h6>
                <small className="text-muted">{item.desc}</small>
              </div>
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={toggles[item.key]}
                  onChange={() => handleToggle(item.key)}
                  style={{ width: "50px", height: "26px" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hiển thị & Tùy chọn tìm kiếm */}
      <div className="row">
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="text-primary">🌍 Hiển thị</h5>
              <div className="mb-3">
                <label>Ngôn ngữ</label>
                <select className="form-select"><option>Tiếng Việt</option></select>
              </div>
              <div>
                <label>Đơn vị tiền tệ</label>
                <select className="form-select"><option>VND (đ)</option></select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card border-0 shadow-sm">
            <div className="card-body">
              <h5 className="text-primary">🔍 Tùy chọn tìm kiếm</h5>
              <label>Khu vực mặc định</label>
              <select className="form-select mb-3"><option>TP. Hồ Chí Minh</option></select>
              <label>Khoảng giá mặc định</label>
              <select className="form-select mb-3"><option>Tất cả</option></select>
              <label>Loại hình mặc định</label>
              <select className="form-select"><option>Tất cả</option></select>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary btn-lg px-5 rounded-pill">Lưu cài đặt</button>
        <button className="btn btn-outline-secondary btn-lg rounded-pill ms-3">Đặt lại mặc định</button>
      </div>
    </div>
  );
}