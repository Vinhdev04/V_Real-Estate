import React from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';
import {NavLink, useNavigate} from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth.js';
import axios from "axios";

export default function LoginForm() {
  // call hook and get data
  const {login, loading,clearError, errors} = useAuth();
  const handleChange = (e) => {
    const { name } = e.target; 
    clearError(name); 
  };
  return (
    <AuthLayout title="Chào mừng trở lại!">
      <div className="auth-card">
        <h2 className="form-title">Đăng Nhập</h2>
        <p className="form-subtitle">Nhập thông tin để đăng nhập vào tài khoản</p>

        <form className="auth-form" onSubmit={login}>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              placeholder="Nhập email"
             onChange={handleChange} className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Mật khẩu *</label>
            <input
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={handleChange}  className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <span className="error-text">{errors.password}</span>}
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
               
              />
              <span>Ghi nhớ đăng nhập</span>
            </label>
            <span className="forgot-link">Quên mật khẩu?</span>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Đang xử lý...' : 'Đăng nhập →'}</button>
           {errors.general && <div className="error-message text-danger">{errors.general}</div>}
      
          <div className="toggle-form">
            <span>Chưa có tài khoản? </span>
            <NavLink to ="auth/register">Đăng ký ngay</NavLink>
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