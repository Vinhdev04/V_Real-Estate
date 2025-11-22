import { useEffect, useState } from "react";
import "../styles/profile.css";

function EditProfile() {
  // 1. Initialize state to hold form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    telephone: "",
    createAt: "",
    gender: "Nam",
    address: "",
    bio: "",
    avt:""
  });

  // 2. Load data from LocalStorage once when component mounts
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        // Merge stored data into state
        setFormData((prev) => ({ ...prev, ...parsedUser }));
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  // 3. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Kiểm tra kích thước file (ví dụ: giới hạn 2MB để tránh tràn LocalStorage)
      if (file.size > 2 * 1024 * 1024) {
        alert("File ảnh quá lớn! Vui lòng chọn ảnh dưới 2MB.");
        return;
      }

      // Chuyển ảnh sang dạng Base64 để hiển thị và lưu trữ
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, avt: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };
  // 4. Handle Save Action
  const handleSave = () => {
    // Save back to local storage
    localStorage.setItem("user", JSON.stringify(formData));
    alert("Đã lưu thay đổi thành công!");
  };

  return (
    <div className="profile-section profile-form">
      <h4 className="profile-section__title">Chỉnh sửa hồ sơ</h4>

      <div className="profile-avatar-upload">
       
        <div className="profile-avatar-upload__circle">
          {formData.avt ? (
            <img 
              src={formData.avt} 
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
            value={formData.username || ""} 
            onChange={handleChange} 
            placeholder="Họ và tên"
          />
        </div>
        <div className="col-md-6">
          <input
            type="email"
            name="email"
            className="profile-form__input"
            value={formData.email || ""}
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
            value={formData.telephone || ""}
            onChange={handleChange}
            placeholder="Số điện thoại"
          />
        </div>
        <div className="col-md-6">
          <input
            type="date"
            name="createAt"
            className="profile-form__input"
            value={formData.createAt || ""}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-6">
          <select 
            className="profile-form__select"
            name="gender"
            value={formData.gender}
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
            value={formData.address || ""}
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
            value={formData.bio || ""}
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