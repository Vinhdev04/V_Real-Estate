import React, { useState } from 'react';
import "../../styles/Login.css"
import AuthLayout from '../AuthLayout/AuthLayout';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
export default function RegisterForm() {
  const [error,setError] = useState("");

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData(e.target);
    const data = {
    username: formData.get('username'),
    email: formData.get('email'),
    password: formData.get('password'),
    passwordConfirm: formData.get('passwordConfirm'),
    telephone: formData.get('telephone'),
    };

    
    try{
        const res = await axios.post("http://localhost:8080/api/auth/register",data, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true, //  backend có dùng cookie
      });
        console.log(res.data);
        navigate("/auth/login");
    }catch(err){
      // get error from be
      setError(err.response.data.message);
    }
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
              />
            </div>
            <div className="form-group">
              <label>Số điện thoại *</label>
              <input
                type="tel" 
                name="telephone"
                placeholder="Nhập số điện thoại"
              
                required 
              />
            </div>
          </div>

          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              placeholder="Nhập email"
             
              required 
              name="email"
            />
          </div>

          <div className="form-group">
            <label>Mật khẩu *</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
             
              required 
              name="password"
            />
          </div>

          <div className="form-group">
            <label>Xác nhận mật khẩu *</label>
            <input
              type="password"
              placeholder="Nhập lại mật khẩu"
              
              required 
              name="passwordConfirm"
            />
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input
                type="checkbox"
              
              />
              <span>Tôi đồng ý với Điều khoản và Chính sách</span>
            </label>
          </div>

          <button type="submit" className="submit-btn">Đăng ký →</button>
          {error && <div className="error-message text-danger">{error}</div>}

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