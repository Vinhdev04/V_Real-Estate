import { useState, useContext } from "react";
import "../styles/EditProfile.css";
import { AuthContext } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import imgDefault from "../../../assets/images/default-user.png";
import useFormatTime from "../../../utils/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { API_URL_UPDATE_PROFILE } from "../../../constant/api";
import { useNavigate } from "react-router-dom";

function EditProfile() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const formattedCreateAt = useFormatTime();
  const navigate = useNavigate();

  // State để lưu form data và preview avatar
  const [formData, setFormData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    telephone: currentUser?.telephone || "",
    gender: currentUser?.gender || "Nam",
    address: currentUser?.address || "",
    bio: currentUser?.bio || "",
  });

  const [avatarFile, setAvatarFile] = useState(null);
  const [avatarPreview, setAvatarPreview] = useState(
    currentUser?.avatar ? `${currentUser.avatar}` : ""
  );
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle image upload và preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      // Kiểm tra file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        Swal.fire("Lỗi", "Kích thước ảnh không được vượt quá 5MB", "error");
        return;
      }

      // Kiểm tra file type
      if (!file.type.startsWith("image/")) {
        Swal.fire("Lỗi", "Vui lòng chọn file ảnh hợp lệ", "error");
        return;
      }

      setAvatarFile(file);

      // Tạo preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!currentUser?.id) {
      Swal.fire(
        "Lỗi",
        "Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.",
        "error"
      );
      navigate("/login");
      return;
    }

    try {
      // Tạo FormData để gửi cả file và text
      const submitData = new FormData();

      // Thêm các field text
      Object.keys(formData).forEach((key) => {
        if (formData[key] !== undefined && formData[key] !== "") {
          submitData.append(key, formData[key]);
        }
      });

      // Thêm avatar nếu có
      if (avatarFile) {
        submitData.append("avatar", avatarFile);
      }

      // Gửi request
      const res = await axios.put(
        `${API_URL_UPDATE_PROFILE}/${currentUser.id}`,
        submitData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Cập nhật context với dữ liệu mới
      updateUser(res.data.user);

      Swal.fire("Thành công!", "Cập nhật hồ sơ thành công", "success");

      // Reset avatar file sau khi upload thành công
      setAvatarFile(null);
    } catch (err) {
      console.error("Update error:", err);
      const msg = err.response?.data?.message || "Cập nhật thất bại";
      Swal.fire("Lỗi", msg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle Cancel - Reset form về giá trị ban đầu
  const handleCancel = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Hủy thay đổi?",
      text: "Tất cả thay đổi chưa lưu sẽ bị mất.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Có, hủy bỏ",
      cancelButtonText: "Không",
    }).then((result) => {
      if (result.isConfirmed) {
        // Reset form
        setFormData({
          username: currentUser?.username || "",
          email: currentUser?.email || "",
          telephone: currentUser?.telephone || "",
          gender: currentUser?.gender || "Nam",
          address: currentUser?.address || "",
          bio: currentUser?.bio || "",
        });
        setAvatarFile(null);
        setAvatarPreview(currentUser?.avatar || "");

        Swal.fire("Đã hủy", "Các thay đổi đã được hủy bỏ", "info");
      }
    });
  };

  return (
    <div className="profile-section profile-section--edit">
      <div className="profile-edit">
        {/* Header */}
        <div className="profile-edit__header">
          <h2 className="profile-edit__title">Chỉnh sửa hồ sơ</h2>
          <p className="profile-edit__subtitle">
            Cập nhật thông tin cá nhân của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="profile-edit__form">
          {/* Avatar Upload Section */}
          <div className="profile-edit__avatar-section">
            <div className="profile-edit__avatar-wrapper">
              <div className="profile-edit__avatar-circle">
                {avatarPreview ? (
                  <LazyLoadImage
                    src={avatarPreview}
                    alt="Avatar"
                    className="profile-edit__avatar-img"
                    effect="blur"
                  />
                ) : (
                  <img
                    src={imgDefault}
                    alt="Avatar"
                    className="profile-edit__avatar-img"
                  />
                )}
                <div className="profile-edit__avatar-overlay">
                  <span className="profile-edit__avatar-icon">📷</span>
                </div>
              </div>

              <label className="profile-edit__upload-btn">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="profile-edit__upload-input"
                />
                <span className="profile-edit__upload-icon">⬆️</span>
                <span className="profile-edit__upload-text">Tải ảnh lên</span>
              </label>

              {avatarFile && (
                <div className="profile-edit__file-info">
                  <span className="profile-edit__file-icon">✓</span>
                  <span className="profile-edit__file-name">
                    {avatarFile.name}
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Form Fields */}
          <div className="profile-edit__fields">
            <div className="row g-4">
              {/* Username */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="username" className="profile-edit__label">
                    <span className="profile-edit__label-icon">👤</span>
                    <span className="profile-edit__label-text">Username</span>
                  </label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    className="profile-edit__input"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Nhập tên của bạn"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="email" className="profile-edit__label">
                    <span className="profile-edit__label-icon">✉️</span>
                    <span className="profile-edit__label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="profile-edit__input"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    readOnly
                  />
                </div>
              </div>

              {/* Telephone */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="telephone" className="profile-edit__label">
                    <span className="profile-edit__label-icon">📱</span>
                    <span className="profile-edit__label-text">Telephone</span>
                  </label>
                  <input
                    type="text"
                    name="telephone"
                    id="telephone"
                    className="profile-edit__input"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              {/* Created At */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="createAt" className="profile-edit__label">
                    <span className="profile-edit__label-icon">📅</span>
                    <span className="profile-edit__label-text">Created At</span>
                  </label>
                  <input
                    type="text"
                    name="createAt"
                    id="createAt"
                    className="profile-edit__input profile-edit__input--readonly"
                    value={formattedCreateAt}
                    readOnly
                  />
                </div>
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="gender" className="profile-edit__label">
                    <span className="profile-edit__label-icon">⚥</span>
                    <span className="profile-edit__label-text">Gender</span>
                  </label>
                  <select
                    name="gender"
                    id="gender"
                    className="profile-edit__select"
                    value={formData.gender}
                    onChange={handleChange}
                  >
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="col-md-6">
                <div className="profile-edit__field">
                  <label htmlFor="address" className="profile-edit__label">
                    <span className="profile-edit__label-icon">📍</span>
                    <span className="profile-edit__label-text">Address</span>
                  </label>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    className="profile-edit__input"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Địa chỉ"
                  />
                </div>
              </div>

              {/* Bio */}
              <div className="col-12">
                <div className="profile-edit__field">
                  <label htmlFor="bio" className="profile-edit__label">
                    <span className="profile-edit__label-icon">📝</span>
                    <span className="profile-edit__label-text">Bio</span>
                  </label>
                  <textarea
                    name="bio"
                    id="bio"
                    rows="4"
                    className="profile-edit__textarea"
                    value={formData.bio}
                    onChange={handleChange}
                    placeholder="Giới thiệu bản thân"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="profile-edit__actions">
            <button
              type="submit"
              className="profile-edit__btn profile-edit__btn--primary"
              disabled={isLoading}
            >
              <span className="profile-edit__btn-icon">💾</span>
              <span className="profile-edit__btn-text">
                {isLoading ? "Đang lưu..." : "Lưu thay đổi"}
              </span>
            </button>

            <button
              type="button"
              className="profile-edit__btn profile-edit__btn--secondary"
              onClick={handleCancel}
              disabled={isLoading}
            >
              <span className="profile-edit__btn-icon">✕</span>
              <span className="profile-edit__btn-text">Hủy</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
