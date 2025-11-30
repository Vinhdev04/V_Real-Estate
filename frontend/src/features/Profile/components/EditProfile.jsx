import { useEffect, useState, useContext} from "react";
import "../styles/profile.css";
import {AuthContext} from "../../../context/AuthContext";
import Swal from 'sweetalert2'
import imgDefault from '../../../assets/images/default-user.png';
import useFormatTime from "../../../utils/helpers";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function EditProfile() {
  const {currentUser,updateUser} = useContext(AuthContext)
  const formattedCreateAt = useFormatTime();
  

  // 3. Handle input changes
  const handleChange = (e) => {
  }
  
  const handleImageChange = (e) => {
  
    }
  
  
  // 4. Handle Save Action
  const handleSave = () => {
    Swal.fire({
      title: "Bạn có muốn lưu thay đổi?",
      text: "Thay đổi sẽ được lưu và hiển thị trên trang cá nhân của bạn.",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Lưu thay đổi",
      denyButtonText: `Không lưu thay đổi`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Lưu thành công!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Thao tác lưu chưa thành công", "", "warning");
      }
    });

  };

  return (
    <div className="profile-section profile-form">
      <h4 className="profile-section__title">Chỉnh sửa hồ sơ</h4>

      <div className="profile-avatar-upload">
       
        <div className="profile-avatar-upload__circle">
          {currentUser.avatar ? (
            <LazyLoadImage 
              src={currentUser.avatar }
              alt="Avatar" className="profile__avt-thumb"
            
            />
          ) : (
            <img 
              src={ imgDefault}
              alt="Avatar" className="profile__avt-thumb"
            
            />
          )}
        </div>

      
        <label className="profile-avatar-upload__btn" style={{cursor: "pointer"}}>
          <span>Tải ảnh lên</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: "none" }} 
            defaultValue={""}
          /> 
        </label>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username" 
            className="profile-form__input"
            defaultValue={currentUser.username || ""} 
            onChange={handleChange} 
            placeholder="Họ và tên"
            id="username"
          />
        </div>
        <div className="col-md-6">
            <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            className="profile-form__input"
            defaultValue={currentUser.email || ""}
            onChange={handleChange}
            placeholder="Email"
           
            id="email"
          />
        </div>
        <div className="col-md-6">
           <label htmlFor="telephone">Telephone</label>
          <input
            type="text"
            name="telephone"
            className="profile-form__input"
            defaultValue={currentUser.telephone || ""}
            onChange={handleChange}
            id="telephone"
            placeholder="Số điện thoại"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="createAt">Created At</label>
          <input
            type="text"
            name="createAt"
            className="profile-form__input"
            value={formattedCreateAt}
            onChange={handleChange} readOnly
            id="createAt"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="gender">Gender</label>
          <select 
            className="profile-form__select"
            name="gender"
            defaultValue={currentUser.gender}
            onChange={handleChange}
            id="gender"
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            className="profile-form__input"
            defaultValue={currentUser.address || ""}
            onChange={handleChange}
            id="address"
            placeholder="Địa chỉ"
          />
        </div>
        <div className="col-12">
          <label htmlFor="bio">Bio</label>
          <textarea
            className="profile-form__textarea"
            name="bio"
            rows="4"
            placeholder="Giới thiệu bản thân"
            defaultValue={currentUser.bio || ""}
            onChange={handleChange}
            id="bio"
          />
        </div>
      </div>

      <div className="profile-form__actions">
        <button 
          className="profile-form__btn profile-form__btn--primary text-dark"
          onClick={handleSave}
        >
          Lưu thay đổi
        </button>
        <button className="profile-form__btn profile-form__btn--secondary">
          Hủy
        </button>
      </div>
    </div>
  );
}

export default EditProfile;