import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { googleLogout } from '@react-oauth/google';
import { googleLoginService } from '../features/Auth/services/googleLoginService.js';

export const useGoogleAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Xử lý đăng nhập thành công từ Google
  const handleGoogleLoginSuccess = async (credentialResponse) => {
    try {
      setLoading(true);
      setError(null);

      // Decode JWT từ Google để lấy thông tin user
      const decoded = jwtDecode(credentialResponse.credential);
      console.log('Google User Info:', decoded);

      // Gửi thông tin lên backend để lưu vào database
      const response = await googleLoginService({
        email: decoded.email,
        username: decoded.name,
        googleId: decoded.sub,
        avatar: decoded.picture,
        emailVerified: decoded.email_verified,
      });

      console.log('Backend Response:', response);

      // Lưu token vào localStorage (nếu backend trả về)
      if (response.token) {
        localStorage.setItem('token', response.token);
      }

      // Lưu thông tin user vào localStorage
      if (response.userInfo) {
        localStorage.setItem('user', JSON.stringify(response.userInfo));
      }

      // Chuyển hướng về trang chủ
      navigate('/');
      
      return response;
    } catch (err) {
      console.error('Google Login Error:', err);
      setError(err.response?.data?.message || 'Đăng nhập Google thất bại');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Xử lý khi đăng nhập Google thất bại
  const handleGoogleLoginError = () => {
    setError('Đăng nhập Google thất bại. Vui lòng thử lại.');
    console.error('Google Login Failed');
  };

  // Xử lý đăng xuất
  const handleLogout = () => {
    try {
      // Đăng xuất khỏi Google
      googleLogout();
      
      // Xóa token và user info khỏi localStorage
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      
      console.log('User logged out');
      
      // Chuyển về trang login
      navigate('/auth/login');
    } catch (err) {
      console.error('Logout Error:', err);
      setError('Đăng xuất thất bại');
    }
  };

  return {
    loading,
    error,
    handleGoogleLoginSuccess,
    handleGoogleLoginError,
    handleLogout,
  };
};