import React, { useState } from 'react';
import "../../styles/LoginModal.css"
import { useAuth } from '../../../../hooks/useAuth.js';
import LoginGG from '../../../../pages/LoginGG';

export default function RegisterForm() {
  const { handleSubmit, loading, clearError, errors} = useAuth();
  const [showModal, setShowModal] = useState(true);
  const [registerMethod, setRegisterMethod] = useState(null); // null, 'otp', 'password', 'google'

  const handleChange = (e) => {
    const { name } = e.target; 
    clearError(name); 
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleSelectMethod = (method) => {
    setRegisterMethod(method);
  };

  const handleBack = () => {
    setRegisterMethod(null);
  };

  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close-btn" onClick={handleCloseModal}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>

        <div className="modal-content">
          {/* Left Side - Image */}
          <div className="modal-image-section">
            <div className="modal-image-overlay"></div>
          </div>

          {/* Right Side - Content */}
          <div className="modal-form-section">
            {/* Logo */}
            <div className="modal-logo">
              <div className="logo-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="logo-text">V_Real-Estate.com</span>
            </div>

            {registerMethod && (
              <button className="back-btn" onClick={handleBack}>
                <svg viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd"/>
                </svg>
                Quay lại
              </button>
            )}

            <h2 className="modal-title">Tham gia cùng V_Real-Estate.com</h2>
            <p className="modal-subtitle">Tạo tài khoản mới để bắt đầu</p>

            {/* Register Options - Show when no method selected */}
            {!registerMethod && (
              <div className="login-options">
                <button className="login-option-btn" onClick={() => handleSelectMethod('otp')}>
                  <div className="option-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                      <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
                      <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                  </div>
                  Đăng ký với OTP
                </button>

                <button className="login-option-btn" onClick={() => handleSelectMethod('password')}>
                  <div className="option-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4"/>
                    </svg>
                  </div>
                  Đăng ký với mật khẩu
                </button>

                <button className="login-option-btn" onClick={() => handleSelectMethod('google')}>
                  <div className="option-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>
                  Đăng ký với Google
                </button>
              </div>
            )}

            {/* Password Registration Form */}
            {registerMethod === 'password' && (
              <form className="auth-form active" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Họ và tên *</label>
                    <input
                      type="text"
                      placeholder="Nhập họ và tên"
                      name="username"
                      onChange={handleChange}
                      className={errors.username ? 'input-error' : ''}
                    />
                    {errors.username && <span className="error-text">{errors.username}</span>}
                  </div>
                  
                  <div className="form-group">
                    <label>Số điện thoại *</label>
                    <input
                      type="tel" 
                      name="telephone"
                      placeholder="Nhập số điện thoại"
                      onChange={handleChange}
                      className={errors.telephone ? 'input-error' : ''}
                    />
                    {errors.telephone && <span className="error-text">{errors.telephone}</span>}
                  </div>
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    onChange={handleChange}
                    name="email"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label>Mật khẩu *</label>
                  <input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    onChange={handleChange}
                    name="password"
                    className={errors.password ? 'input-error' : ''}
                  />
                  {errors.password && <span className="error-text">{errors.password}</span>}
                </div>

                <div className="form-group">
                  <label>Xác nhận mật khẩu *</label>
                  <input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    onChange={handleChange}
                    name="passwordConfirm"
                    className={errors.passwordConfirm ? 'input-error' : ''}
                  />
                  {errors.passwordConfirm && <span className="error-text">{errors.passwordConfirm}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Đăng ký →'}
                </button>
                
                {errors.general && (
                  <div className="error-message text-danger">{errors.general}</div>
                )}
              </form>
            )}

            {/* OTP Registration Form */}
            {registerMethod === 'otp' && (
              <form className="auth-form active" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Họ và tên *</label>
                  <input
                    type="text"
                    placeholder="Nhập họ và tên"
                    name="username"
                    onChange={handleChange}
                    className={errors.username ? 'input-error' : ''}
                  />
                  {errors.username && <span className="error-text">{errors.username}</span>}
                </div>

                <div className="form-group">
                  <label>Số điện thoại *</label>
                  <input
                    type="tel" 
                    name="telephone"
                    placeholder="Nhập số điện thoại"
                    onChange={handleChange}
                    className={errors.telephone ? 'input-error' : ''}
                  />
                  {errors.telephone && <span className="error-text">{errors.telephone}</span>}
                </div>

                <div className="form-group">
                  <label>Email *</label>
                  <input
                    type="email"
                    placeholder="Nhập email"
                    onChange={handleChange}
                    name="email"
                    className={errors.email ? 'input-error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Đang xử lý...' : 'Gửi mã OTP →'}
                </button>
                
                {errors.general && (
                  <div className="error-message text-danger">{errors.general}</div>
                )}
              </form>
            )}

            {/* Google Registration */}
            {registerMethod === 'google' && (
              <div className="auth-form active">
                <LoginGG />
              </div>
            )}

            <div className="modal-footer">
              <p className="footer-text">
                Bằng việc bấm vào nút Đăng ký bạn đã đồng ý với các <a href="#" className="footer-link">điều khoản sử dụng</a> và <a href="#" className="footer-link">chính sách bảo mật</a> của chúng tôi.
              </p>
              <div className="footer-register">
                <span>Đã có tài khoản?</span>
                <a href="/auth/login" className="register-link">Đăng nhập ngay</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}