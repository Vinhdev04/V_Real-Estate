import React from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useGoogleAuth } from '../hooks/useGoogleAuth.js';
import '../features/Auth/styles/Login.css'; 

function LoginGG() {
  const { 
    loading, 
    error, 
    handleGoogleLoginSuccess, 
    handleGoogleLoginError 
  } = useGoogleAuth();

  return (
    <div className="google-login-wrapper" style={{ width: '100%' }}>
 
      {loading && (
        <div className="action__loading" >
          <p className="loading" >Đang xử lý đăng nhập...</p>
        </div>
      )}

      {error && (
        <div className="error-message text-danger error-login">
          {error}
        </div>
      )}

 
      <div className="login-wrapper" >
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
    </div>
  );
}

export default LoginGG;