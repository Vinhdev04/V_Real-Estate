import React, { useState } from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password, rememberMe });
  };

  return (
    <AuthLayout title="Chào mừng trở lại!">
      <div className="auth-card">
        <h2 className="form-title">Đăng Nhập</h2>
        <p className="form-subtitle">Nhập thông tin để đăng nhập vào tài khoản</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Nhập email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu *</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <span className="forgot-link">Quên mật khẩu?</span>
          </div>

          <button type="submit" className="submit-btn">Đăng nhập →</button>

          <div className="toggle-form">
            <span>Chưa có tài khoản? </span>
            <a href="/register">Đăng ký ngay</a>
          </div>

          <div className="divider">Hoặc</div>

          <div className="social-buttons">
            <button type="button" className="social-btn google-btn">🔵 Google</button>
            <button type="button" className="social-btn facebook-btn">👍 Facebook</button>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}