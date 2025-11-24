// src/features/Services/components/RegistrationModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose, service }) => {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   phone: '',
  //   email: '',
  //   message: ''
  // });

  // const [errors, setErrors] = useState({});

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({
  //     ...prev,
  //     [name]: value
  //   }));
  //   // Clear error when user starts typing
  //   if (errors[name]) {
  //     setErrors(prev => ({
  //       ...prev,
  //       [name]: ''
  //     }));
  //   }
  // };

  // const validateForm = () => {
  //   const newErrors = {};

  //   if (!formData.name.trim()) {
  //     newErrors.name = 'Vui lòng nhập họ và tên';
  //   }

  //   if (!formData.phone.trim()) {
  //     newErrors.phone = 'Vui lòng nhập số điện thoại';
  //   } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
  //     newErrors.phone = 'Số điện thoại không hợp lệ';
  //   }

  //   if (!formData.email.trim()) {
  //     newErrors.email = 'Vui lòng nhập email';
  //   } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     newErrors.email = 'Email không hợp lệ';
  //   }

  //   setErrors(newErrors);
  //   return Object.keys(newErrors).length === 0;
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   if (validateForm()) {
  //     // Handle form submission
  //     console.log('Form submitted:', {
  //       ...formData,
  //       service: service?.title || 'Tư vấn chung'
  //     });
      
  //     // Show success message or redirect
  //     alert('Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
      
  //     // Reset form and close modal
  //     setFormData({ name: '', phone: '', email: '', message: '' });
  //     onClose();
  //   }
  // };

  // if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button 
          className="modal-content__close"
          onClick={onClose}
          aria-label="Đóng"
        >
          <X size={24} />
        </button>

        <div className="modal-header">
          <h2 className="modal-header__title">Đăng ký dịch vụ</h2>
          <p className="modal-header__subtitle">
            Vui lòng điền thông tin để đăng ký dịch vụ{' '}
            <strong>{service?.title || 'tư vấn bất động sản'}</strong>
          </p>
        </div>

        <form className="modal-form" onSubmit={""}>
          <div className="modal-form__group">
            <label className="modal-form__label">
              Họ và tên
              <span className="modal-form__label-required">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={""}
              onChange={""}
              className={`modal-form__input `}
              placeholder="Nguyễn Văn A"
            />
            {/* {errors.name && (
              <span className="modal-form__error-message">{errors.name}</span>
            )} */}
          </div>

          <div className="modal-form__group">
            <label className="modal-form__label">
              Số điện thoại
              <span className="modal-form__label-required">*</span>
            </label>
            <input
              type="tel"
              name="phone"
              value={"formData.phone"}
              onChange={"handleChange"}
              className={`modal-form__input `}
              placeholder="0123 456 789"
            />
            {/* {errors.phone && (
              <span className="modal-form__error-message">{errors.phone}</span>
            )} */}
          </div>

          <div className="modal-form__group">
            <label className="modal-form__label">
              Email
              <span className="modal-form__label-required">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={"formData.email"}
              onChange={"handleChange"}
              className={`modal-form__input `}
              placeholder="example@email.com"
            />
            {/* {errors.email && (
              <span className="modal-form__error-message">{errors.email}</span>
            )} */}
          </div>

          <div className="modal-form__group">
            <label className="modal-form__label">Dịch vụ</label>
            <input
              type="text"
              value={service?.title || 'Tư vấn chung'}
              className="modal-form__input"
              disabled
            />
          </div>

          <div className="modal-form__group">
            <label className="modal-form__label">Tin nhắn (tùy chọn)</label>
            <textarea
              name="message"
              value={"formData.message"}
              onChange={"handleChange"}
              className="modal-form__textarea"
              placeholder="Nhập yêu cầu chi tiết của bạn..."
              rows="4"
            />
          </div>

          <div className="modal-actions">
            <button 
              type="button" 
              className="modal-actions__btn modal-actions__btn--cancel"
              onClick={onClose}
            >
              Hủy
            </button>
            <button 
              type="submit" 
              className="modal-actions__btn modal-actions__btn--submit"
            >
              Đăng ký
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationModal;