// src/hooks/useAuth.js

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL_REGISTER } from '../constant/api.js';
export const useAuth = () => {
  const [loading, setLoading] = useState(false);
 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const clearError = (fieldName) => {
  
    if (errors[fieldName]) {
      // Cập nhật lại state errors, loại bỏ lỗi của trường đó
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[fieldName];
        return newErrors;
      });
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); 
    setErrors({});     
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      username: formData.get('username'),
      email: formData.get('email'),
      password: formData.get('password'),
      passwordConfirm: formData.get('passwordConfirm'),
      telephone: formData.get('telephone'),
    };

    // === 3. KHỐI VALIDATION FRONTEND ===
    const newErrors = {};
    
    // Validate input
    if (!data.username) newErrors.username = "Vui lòng nhập họ và tên.";
    if (!data.telephone) newErrors.telephone = "Vui lòng nhập số điện thoại.";
   

    if(!data.telephone.match(/^[0-9]{10,15}$/)){
      newErrors.telephone = "Số điện thoại không hợp lệ.";
    }

    if (!data.email) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) { 
      newErrors.email = "Email không đúng định dạng.";
    }

    if (!data.password) {
      newErrors.password = "Vui lòng nhập mật khẩu.";
    } else if (data.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự.";
    }

    if (!data.passwordConfirm) {
      newErrors.passwordConfirm = "Vui lòng xác nhận mật khẩu.";
    } else if (data.password && data.password !== data.passwordConfirm) {
      newErrors.passwordConfirm = "Mật khẩu xác nhận không khớp.";
    }

    // Check errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      setLoading(false);    
      return;              
    }
    
    
    try {
      // call API when no errors
      await axios.post(API_URL_REGISTER, {
        username: data.username,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm, 
        telephone: data.telephone,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      
      navigate("/auth/login"); 

    } catch (err) {
      //  handle errors from BE
      const backendError = err.response?.data?.message || 'Đã có lỗi xảy ra';
      const backendErrors = {};

      // Map backend error messages to specific fields
      if (backendError.includes("Email")) {
        backendErrors.email = backendError;
      } else if (backendError.includes("Username")) {
        backendErrors.username = backendError;
      } else if (backendError.includes("Mật khẩu")) {
        backendErrors.passwordConfirm = backendError;
      } else {
        // Error not related to any field
        backendErrors.general = backendError;
      }
      setErrors(backendErrors);
    } finally {
      setLoading(false); 
    }
  };

  // return data and functions
  return { handleSubmit,clearError, loading, errors, setErrors };
};