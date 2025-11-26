// src/hooks/useAuth.js

import { useState ,useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { API_URL_REGISTER,API_URL_LOGIN } from '../constant/api.js';
import {dispatchAuthChange} from "../utils/authEvents.js";
import {AuthContext} from "../context/AuthContext";
export const useAuth = () => {
  const [loading, setLoading] = useState(false);
 
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const {updateUser} = useContext(AuthContext);
  
  // CLEAR ERROR
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

  // SUBMIT FORM
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

    // ===  KHỐI VALIDATION FRONTEND ===
    const newErrors = {};
    
    
    if (!data.username) newErrors.username = "Vui lòng nhập họ và tên.";
    if (!data.telephone) newErrors.telephone = "Vui lòng nhập số điện thoại.";
   

    if (!data.telephone) {
      newErrors.telephone = "Vui lòng nhập số điện thoại.";
    } else if (!data.telephone.match(/^[0-9]{10,15}$/)) { // Dùng else if
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

    // CHECK ERROR
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors); 
      setLoading(false);    
      return;              
    }
    
    
    try {
      // CALL API WHEN NO ERROR
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
      //  HANDLE ERROR FROM BE
      const backendError = err.response?.data?.message || 'Đã có lỗi xảy ra';
      const backendErrors = {};

      
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

  const login = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});
    
    const formData = new FormData(e.target);
    const data = {
      email: formData.get('email'),
      password: formData.get('password'),
    };
    
    const newErrors = {};
    if (!data.email) newErrors.email = "Vui lòng nhập email.";
    if (!data.password) newErrors.password = "Vui lòng nhập mật khẩu.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }
    
    try {
      const res = await axios.post(API_URL_LOGIN, {
        email: data.email,
        password: data.password,
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      
      // HANDLE RESPONSE
      let userData;
      if (res.data.userInfo) {
        userData = res.data.userInfo;
      } else {
        userData = res.data;
      }
      
      localStorage.setItem("user", JSON.stringify(userData));
      
      // UPDATE USER INFO
      updateUser(userData);
      
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
      }
      
      // DISPATCH UPDATE NAVBAR WHEN LOGIN WITH GG
      dispatchAuthChange();
      
      navigate("/");

    } catch(err) {
      console.log(err);
      const backendError = err.response?.data?.message || "Đã có lỗi xảy ra!";
      
      if (backendError.includes("Credentials") || backendError.includes("Missing")) {
        setErrors({ general: "Email hoặc mật khẩu không chính xác." });
      } else {
        setErrors({ general: backendError });
      }
    } finally {
      setLoading(false);
    }
    }

  // RETURN DATA AND FUNCTIONS
  return { handleSubmit,login,clearError, loading, errors, setErrors };
};