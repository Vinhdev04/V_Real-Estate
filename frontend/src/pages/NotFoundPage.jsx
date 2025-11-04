// pages/NotFoundPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search } from 'lucide-react';
import './NotFoundPage.css';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      {/* Animated Background Elements */}
      <div className="background-animation">
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
        <div className="floating-circle circle-3"></div>
      </div>

      {/* Main Content */}
      <div className="notfound-content">
        {/* 404 Number with Animation */}
        <div className="error-code-wrapper">
          <h1 className="error-code">404</h1>
        </div>

        {/* Animated Character SVG */}
        <div className="character-wrapper">
          <svg className="character-svg" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            {/* Head */}
            <circle cx="100" cy="60" r="30" fill="#3b82f6" className="head" />
            
            {/* Eyes */}
            <circle cx="90" cy="55" r="4" fill="white" />
            <circle cx="110" cy="55" r="4" fill="white" />
            
            {/* Confused mouth */}
            <path d="M 90 70 Q 100 75 110 70" stroke="#ffffff" strokeWidth="2" fill="none" strokeLinecap="round" />
            
            {/* Body */}
            <rect x="80" y="95" width="40" height="50" rx="5" fill="#8b5cf6" className="body" />
            
            {/* Left arm */}
            <rect x="50" y="100" width="30" height="15" rx="7" fill="#ec4899" transform="rotate(-30 65 107)" className="arm left-arm" />
            
            {/* Right arm */}
            <rect x="120" y="100" width="30" height="15" rx="7" fill="#ec4899" transform="rotate(30 135 107)" className="arm right-arm" />
            
            {/* Left leg */}
            <rect x="85" y="150" width="12" height="35" rx="6" fill="#06b6d4" className="leg left-leg" />
            
            {/* Right leg */}
            <rect x="103" y="150" width="12" height="35" rx="6" fill="#06b6d4" className="leg right-leg" />
          </svg>
        </div>

        {/* Text Content */}
        <div className="notfound-text">
          <h2 className="notfound-title">Oops! Trang Không Tìm Thấy</h2>
          <p className="notfound-subtitle">
            Trang bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
          </p>
          <p className="notfound-description">
            Nhưng đừng lo! Bạn có thể quay lại và tiếp tục khám phá.
          </p>
        </div>

        {/* Error Details */}
        <div className="error-details">
          <div className="error-icon">
            <Search size={20} />
          </div>
          <div className="error-info">
            <span className="error-label">Lỗi 404 - Không Tìm Thấy</span>
            <p className="error-path">
              Đường dẫn: <span className="path-code">{window.location.pathname}</span>
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="button-group">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-back"
          >
            <ArrowLeft size={20} />
            <span>Quay Lại</span>
          </button>

          <button
            onClick={() => navigate('/')}
            className="btn btn-home"
          >
            <Home size={20} />
            <span>Về Trang Chủ</span>
          </button>
        </div>

        {/* Additional Help Links */}
        <div className="help-links">
          <p>Cần giúp đỡ?</p>
          <nav className="links-nav">
            <a href="/">Trang Chủ</a>
            <span>•</span>
            <a href="/contact">Liên Hệ Hỗ Trợ</a>
            <span>•</span>
            <a href="/properties">Xem Bất Động Sản</a>
          </nav>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="decorative-circle circle-bottom-left"></div>
      <div className="decorative-circle circle-bottom-right"></div>
    </div>
  );
}

export default NotFoundPage;