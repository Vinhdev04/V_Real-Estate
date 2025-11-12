// googleAuth.service.js - Service xử lý API calls cho Google Login
import axios from 'axios';

// Lấy API URL từ environment variable
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

// Service xử lý đăng nhập Google
export const googleLoginService = async (googleUserData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/google-login`,
      googleUserData,
      {
        withCredentials: true, // Quan trọng: để gửi và nhận cookies
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Google Login Service Error:', error);
    
    // Throw error để useGoogleAuth có thể catch và hiển thị
    throw error;
  }
};

// Service xử lý đăng xuất
export const logoutService = async () => {
  try {
    const response = await axios.post(
      `${API_URL}/api/auth/logout`,
      {},
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error('Logout Service Error:', error);
    throw error;
  }
};