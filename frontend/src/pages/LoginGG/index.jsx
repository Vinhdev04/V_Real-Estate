import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleAuth } from '../../hooks/useGoogleAuth.js';
// import '../../../styles/Login.css'; 

function LoginGG() {
  const { 
    loading, 
    error, 
    handleGoogleLoginSuccess, 
    handleGoogleLoginError 
  } = useGoogleAuth();

  return (
    <div className="google-login-wrapper" style={{ width: '100%' }}>
      {/* Hiển thị loading overlay khi đang xử lý */}
      {loading && (
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(255, 255, 255, 0.9)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 10,
          borderRadius: '8px'
        }}>
          <p style={{ margin: 0, color: '#333' }}>Đang xử lý đăng nhập...</p>
        </div>
      )}

      {/* Hiển thị lỗi nếu có */}
      {error && (
        <div className="error-message text-danger" style={{
          marginBottom: '12px',
          padding: '8px 12px',
          background: '#fee',
          borderRadius: '6px',
          fontSize: '14px',
          color: '#d00'
        }}>
          {error}
        </div>
      )}

      {/* Google Login Button */}
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <GoogleLogin
          onSuccess={handleGoogleLoginSuccess}
          onError={handleGoogleLoginError}
          useOneTap={false}
          text="continue_with"
          shape="rectangular"
          size="large"
          width="100%"
          theme="outline"
          logo_alignment="left"
        />
      </div>

      {/* Optional: Thêm text giải thích */}
      <p style={{ 
        textAlign: 'center', 
        fontSize: '12px', 
        color: '#666', 
        marginTop: '12px' 
      }}>
        Đăng nhập nhanh chóng và bảo mật với Google
      </p>
    </div>
  );
}

export default LoginGG;