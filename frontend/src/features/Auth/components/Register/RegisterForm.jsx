import React from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth.js';


import LoginGG from '../../../../pages/LoginGG';

export default function RegisterForm() {
  const { handleSubmit, loading, clearError, errors} = useAuth();

  const handleChange = (e) => {
    const { name } = e.target; 
    clearError(name); 
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

          <div className="toggle-form">
            <span>Đã có tài khoản? </span>
            <NavLink to="/auth/login">Đăng nhập</NavLink>
          </div>

          <div className="divider">Hoặc</div>

          {/* Thay thế social buttons bằng LoginGG component */}
          <div className="social-buttons">
            <LoginGG />
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}