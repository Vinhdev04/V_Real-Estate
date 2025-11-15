// src/features/Services/components/RegistrationModal.jsx
import React, { useState } from 'react';
import { X } from 'lucide-react';
import '../styles/RegistrationModal.css';

const RegistrationModal = ({ isOpen, onClose, service }) => {
  

  // return (
  //   <div className="modal-overlay" >
  //     <div className="modal-content" >
  //       <button className="modal-close" >
  //         <X size={24} />
  //       </button>

  //       <div className="modal-header">
  //         <h2 className="modal-title">Đăng ký dịch vụ</h2>
  //         <p className="modal-subtitle">
  //           Vui lòng điền thông tin để đăng ký dịch vụ <strong>{service?.title}</strong>
  //         </p>
  //       </div>

  //       <form className="modal-form">
  //         <div className="form-group">
  //           <label className="form-label">
  //             Họ và tên <span className="required">*</span>
  //           </label>
  //           <input
  //             type="text"
  //             name="name"
             
  //             className="form-input "
  //             placeholder="Nguyễn Văn A"
  //           />
         
  //         </div>

  //         <div className="form-group">
  //           <label className="form-label">
  //             Số điện thoại <span className="required">*</span>
  //           </label>
  //           <input
  //             type="tel"
  //             name="phone"
             
  //             className="form-input "
  //             placeholder="0123 456 789"
  //           />
          
  //         </div>

  //         <div className="form-group">
  //           <label className="form-label">
  //             Email <span className="required">*</span>
  //           </label>
  //           <input
  //             type="email"
  //             name="email"
           
  //             className="form-input "
  //             placeholder="example@email.com"
  //           />
          
  //         </div>

  //         <div className="form-group">
  //           <label className="form-label">Dịch vụ</label>
  //           <input
  //             type="text"
  //             value={service?.title || ''}
  //             className="form-input"
  //             disabled
  //           />
  //         </div>

  //         <div className="form-group">
  //           <label className="form-label">Tin nhắn (tùy chọn)</label>
  //           <textarea
  //             name="message"
             
  //             className="form-textarea"
  //             placeholder="Nhập yêu cầu chi tiết của bạn..."
  //             rows="4"
  //           />
  //         </div>

  //         <div className="modal-actions">
  //           <button 
  //             type="button" 
  //             className="btn-cancel"
            
  //           >
  //             Hủy
  //           </button>
  //           <button 
  //             type="submit" 
  //             className="btn-submit"
  //           >
  //             Đăng ký
  //           </button>
  //         </div>
  //       </form>
  //     </div>
  //   </div>
  // );
};

export default RegistrationModal;