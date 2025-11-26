import { useEffect, useState, useContext} from "react";
import "../styles/profile.css";
import {AuthContext} from "../../../context/AuthContext";
import Swal from 'sweetalert2'
import imgDefault from '../../../assets/images/default-user.png';
function EditProfile() {
  const {currentUser,updateUser} = useContext(AuthContext)

  // 1. Initialize state to hold form data
 
  // 2. Load data from LocalStorage once when component mounts
  // useEffect(() => {
  //   const storedUser = localStorage.getItem("user");
  
  // }, []);

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
            <img 
              src={currentUser.avatar || imgDefault}
              alt="Avatar" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} 
            />
          ) : (
            "NV"
          )}
        </div>

        {/* Nút upload kích hoạt input file ẩn */}
        <label className="profile-avatar-upload__btn" style={{cursor: "pointer"}}>
          <span>Tải ảnh lên</span>
          <input 
            type="file" 
            accept="image/*" 
            onChange={handleImageChange} 
            style={{ display: "none" }} 
          />
        </label>
      </div>

      <div className="row g-4">
        <div className="col-md-6">
          <input
            type="text"
            name="username" 
            className="profile-form__input"
            value={currentUser.username || ""} 
            onChange={handleChange} 
            placeholder="Họ và tên"
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="profile-form__input"
            value={currentUser.email || ""}
            onChange={handleChange}
            placeholder="Email"
            readOnly 
          />
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="telephone"
            className="profile-form__input"
            value={currentUser.telephone || "Hãy nhập số điện thoại của bạn!"}
            onChange={handleChange}
            placeholder="Số điện thoại"
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            name="createAt"
            className="profile-form__input"
            value={currentUser.createdAt || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="profile-form__select"
            name="gender"
            value={currentUser.gender}
            onChange={handleChange}
          >
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
          </select>
        </div>
        <div className="col-md-6">
          <input
            type="text"
            name="address"
            className="profile-form__input"
            value={currentUser.address || "Hãy nhập địa chỉ của bạn!"}
            onChange={handleChange}
            placeholder="Địa chỉ"
          />
        </div>
        <div className="col-12">
          <textarea
            className="profile-form__textarea"
            name="bio"
            rows="4"
            placeholder="Giới thiệu bản thân"
            value={currentUser.bio || "Hãy nhập giới thiệu bản thân của bạn!"}
            onChange={handleChange}
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