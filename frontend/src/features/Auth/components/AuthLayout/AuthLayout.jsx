import React from 'react';
import "../../styles/Login.css"

export default function AuthLayout({ title, children }) {
  return (
    <div className="auth-container">
      <div className="auth-wrapper">
        {/* Left Section - Features */}
        <div className="features-section">
          <div className="features-content">
            <h1 className="features-title">{title}</h1>
            <p className="features-subtitle">
              {title === "Chào mừng trở lại!" 
                ? "Đăng nhập để trải nghiệm đầy đủ các tính năng của chúng tôi"
                : "Tạo tài khoản để khám phá thế giới bất động sản"
              }
            </p>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🔍</div>
                <div className="feature-text">
                  <h3>Tìm kiếm nâng cao</h3>
                  <p>Lọc và tìm kiếm bất động sản theo nhiều tiêu chí</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">❤️</div>
                <div className="feature-text">
                  <h3>Lưu yêu thích</h3>
                  <p>Lưu các bất động sản yêu thích để xem sau</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🔔</div>
                <div className="feature-text">
                  <h3>Thông báo mới</h3>
                  <p>Nhận thông báo về bất động sản phù hợp</p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">👤</div>
                <div className="feature-text">
                  <h3>Quản lý tài khoản</h3>
                  <p>Quản lý thông tin cá nhân và lịch sử giao dịch</p>
                </div>
              </div>
            </div>

            <div className="security-badge">
              <div className="badge-icon">🛡️</div>
              <div className="badge-text">
                <h4>Bảo mật thông tin</h4>
                <p>Thông tin của bạn được bảo vệ bằng công nghệ mã hóa tiên tiến và tuân thủ các tiêu chuẩn bảo mật quốc tế.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="form-section">
          {children}
        </div>
      </div>
    </div>
  );
}