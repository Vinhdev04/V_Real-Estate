import React, { useState } from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, phone, email, password, confirmPassword, terms });
  };

  return (
    <AuthLayout title="Tham gia cùng chúng tôi">
      <div className="auth-card">
        <h2 className="form-title">Đăng Ký</h2>
        <p className="form-subtitle">Tạo tài khoản mới để bắt đầu</p>

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>Họ và tên *</label>
              <input
                type="text"
                placeholder="Nhập họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại *</label>
              <input
                type="tel"
                placeholder="Nhập số điện thoại"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
          </div>

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

          <div className="form-group">
            <label>Xác nhận mật khẩu *</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              />
              <span>Tôi đồng ý với Điều khoản và Chính sách</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">Đăng ký →</button>

          <div className="toggle-form">
            <span>Đã có tài khoản? </span>
            <a href="/login">Đăng nhập</a>
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