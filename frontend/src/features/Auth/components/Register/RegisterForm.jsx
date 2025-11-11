import React, { useState } from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../../hooks/useAuth.js';
export default function RegisterForm() {

  // call hook and get data
  const { handleSubmit, loading,clearError, errors} = useAuth();

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

          <div className="form-options">
   
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>{loading ? 'Đang xử lý...' : 'Đăng ký →'}</button>
          
          {/*Hiển thị lỗi chung (nếu có) */}
          {errors.general && <div className="error-message text-danger">{errors.general}</div>}

          <div className="toggle-form">
            <span>Đã có tài khoản? </span>
            <NavLink to="auth/login">Đăng nhập</NavLink>
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