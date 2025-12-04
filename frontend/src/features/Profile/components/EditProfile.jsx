import { useState, useContext } from "react";
import "../styles/EditProfile.css";
import { AuthContext } from "../../../context/AuthContext";
import Swal from "sweetalert2";
import useFormatTime from "../../../utils/helpers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "axios";
import { API_URL_UPDATE_PROFILE } from "../../../constant/api";
import { useNavigate } from "react-router-dom";
import UploadWidget from "../../UploadWidget/UploadWidget";
import {
  Eye,
  EyeOff,
  Lock,
  User,
  Mail,
  Phone,
  MapPin,
  FileText,
} from "lucide-react";

function EditProfile() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // State cho password
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const formattedCreateAt = useFormatTime();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle password input change
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Validate password
  const validatePassword = () => {
    const { currentPassword, newPassword, confirmPassword } = passwordData;

    // Nếu không nhập password thì bỏ qua validation
    if (!currentPassword && !newPassword && !confirmPassword) {
      return { isValid: true, password: null };
    }

    // Nếu nhập 1 trong 3 field thì phải nhập đủ cả 3
    if (currentPassword || newPassword || confirmPassword) {
      if (!currentPassword) {
        Swal.fire("Lỗi", "Vui lòng nhập mật khẩu hiện tại", "error");
        return { isValid: false };
      }
      if (!newPassword) {
        Swal.fire("Lỗi", "Vui lòng nhập mật khẩu mới", "error");
        return { isValid: false };
      }
      if (!confirmPassword) {
        Swal.fire("Lỗi", "Vui lòng xác nhận mật khẩu mới", "error");
        return { isValid: false };
      }
    }

    // Validate độ dài
    if (newPassword && newPassword.length < 6) {
      Swal.fire("Lỗi", "Mật khẩu mới phải có ít nhất 6 ký tự", "error");
      return { isValid: false };
    }

    // Check khớp
    if (newPassword !== confirmPassword) {
      Swal.fire("Lỗi", "Mật khẩu xác nhận không khớp", "error");
      return { isValid: false };
    }

    return { isValid: true, password: newPassword };
  };

  // Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Validate password trước
    const passwordValidation = validatePassword();
    if (!passwordValidation.isValid) {
      setIsLoading(false);
      return;
    }

    const formData = new FormData(e.target);
    const { username, email, telephone, address, bio, gender } =
      Object.fromEntries(formData);

    try {
      const updatePayload = {
        username,
        email,
        telephone,
        address,
        bio,
        avatar,
        gender,
      };

      // Thêm password nếu user muốn đổi
      if (passwordValidation.password) {
        updatePayload.password = passwordValidation.password;
        updatePayload.currentPassword = passwordData.currentPassword;
      }

      const res = await axios.put(
        `${API_URL_UPDATE_PROFILE}/${currentUser.id}`,
        updatePayload,
        {
          withCredentials: true,
        }
      );

      // Cập nhật AuthContext và localStorage
      const updatedUserInfo = res.data.user;
      updateUser(updatedUserInfo);
      localStorage.setItem("user", JSON.stringify(updatedUserInfo));

      Swal.fire("Thành công!", "Cập nhật hồ sơ thành công", "success");

      // Reset password fields
      setPasswordData({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });

      navigate("/profile");
    } catch (err) {
      console.error(err);

      if (err.response?.status === 401) {
        Swal.fire({
          title: "Phiên đăng nhập hết hạn",
          text: "Vui lòng đăng nhập lại",
          icon: "warning",
        }).then(() => {
          localStorage.removeItem("user");
          window.location.href = "/login";
        });
        return;
      }

      const msg = err.response?.data?.message || "Cập nhật thất bại";
      Swal.fire("Lỗi", msg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Hủy chỉnh sửa
  const handleCancel = () => {
    Swal.fire({
      title: "Hủy thay đổi?",
      text: "Tất cả thay đổi chưa lưu sẽ bị mất.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Có, hủy bỏ",
      cancelButtonText: "Không",
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
    }).then((result) => {
      if (result.isConfirmed) {
        setAvatar(currentUser?.avatar || "");
        setPasswordData({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
        navigate("/profile");
      }
    });
  };

  return (
    <div className="profile-section profile-section--edit">
      <div className="profile-edit">
        <div className="profile-edit__header">
          <h2 className="profile-edit__title">
            <User size={28} style={{ marginRight: "12px" }} />
            Chỉnh sửa hồ sơ
          </h2>
          <p className="profile-edit__subtitle">
            Cập nhật thông tin cá nhân và mật khẩu của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="profile-edit__form">
          {/* Avatar Section */}
          <div className="profile-edit__avatar-section">
            <div className="flex-col avatar-wrapper d-flex flex-column">
              <LazyLoadImage
                key={avatar}
                src={avatar || "/default-avatar.png"}
                alt="Avatar"
                className="profile-edit__avatar-img"
                effect="blur"
                width={150}
                height={150}
              />

              <UploadWidget
                uwConfig={{
                  cloudName: "cvinh",
                  uploadPreset: "vestate",
                  multiple: false,
                  maxImageFileSize: 2000000,
                  folder: "avatars",
                  cropping: true,
                }}
                setAvatar={setAvatar}
              />
            </div>
            <div className="avatar-info">
              <h4>{currentUser?.username}</h4>
              <p className="text-muted">
                Click vào nút Upload để thay đổi ảnh đại diện
              </p>
            </div>
          </div>

          <div className="form-divider"></div>

          {/* Thông tin cơ bản */}
          <div className="form-section">
            <h3 className="section-title">
              <User size={20} />
              Thông tin cơ bản
            </h3>
            <div className="row g-4">
              {/* Username */}
              <div className="col-md-6">
                <label className="form-label">
                  <User size={16} /> Username
                </label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  defaultValue={currentUser?.username || ""}
                  placeholder="Nhập tên của bạn"
                />
              </div>

              {/* Email - readonly */}
              <div className="col-md-6">
                <label className="form-label">
                  <Mail size={16} /> Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  defaultValue={currentUser?.email || ""}
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
                />
              </div>

              {/* Telephone */}
              <div className="col-md-6">
                <label className="form-label">
                  <Phone size={16} /> Số điện thoại
                </label>
                <input
                  type="text"
                  name="telephone"
                  className="form-control"
                  defaultValue={currentUser?.telephone || ""}
                  placeholder="Số điện thoại"
                />
              </div>

              {/* Gender */}
              <div className="col-md-6">
                <label className="form-label">Giới tính</label>
                <select
                  name="gender"
                  className="form-select"
                  defaultValue={currentUser?.gender || "Nam"}
                >
                  <option value="Nam">Nam</option>
                  <option value="Nữ">Nữ</option>
                  <option value="Khác">Khác</option>
                </select>
              </div>

              {/* Address */}
              <div className="col-md-6">
                <label className="form-label">
                  <MapPin size={16} /> Địa chỉ
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  defaultValue={currentUser?.address || ""}
                  placeholder="Địa chỉ"
                />
              </div>

              {/* Created At - readonly */}
              <div className="col-md-6">
                <label className="form-label">Ngày tạo tài khoản</label>
                <input
                  type="text"
                  className="form-control"
                  value={formattedCreateAt}
                  readOnly
                  style={{ backgroundColor: "#f5f5f5", cursor: "not-allowed" }}
                />
              </div>

              {/* Bio */}
              <div className="col-12">
                <label className="form-label">
                  <FileText size={16} /> Giới thiệu
                </label>
                <textarea
                  name="bio"
                  rows="4"
                  className="form-control"
                  defaultValue={currentUser?.bio || ""}
                  placeholder="Giới thiệu bản thân"
                />
              </div>
            </div>
          </div>

          <div className="form-divider"></div>

          {/* Đổi mật khẩu */}
          <div className="form-section">
            <h3 className="section-title">
              <Lock size={20} />
              Đổi mật khẩu
            </h3>
            <p className="mb-4 text-muted">
              Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người
              khác
            </p>
            <div className="row g-4">
              {/* Current Password */}
              <div className="col-md-6">
                <label className="form-label">Mật khẩu hiện tại</label>
                <div className="password-input-wrapper">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="currentPassword"
                    className="form-control"
                    placeholder="Nhập mật khẩu hiện tại"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              <div className="col-md-6"></div>

              {/* New Password */}
              <div className="col-md-6">
                <label className="form-label">Mật khẩu mới</label>
                <div className="password-input-wrapper">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    name="newPassword"
                    className="form-control"
                    placeholder="Nhập mật khẩu mới (tối thiểu 6 ký tự)"
                    value={passwordData.newPassword}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                  >
                    {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="col-md-6">
                <label className="form-label">Xác nhận mật khẩu mới</label>
                <div className="password-input-wrapper">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    className="form-control"
                    placeholder="Nhập lại mật khẩu mới"
                    value={passwordData.confirmPassword}
                    onChange={handlePasswordChange}
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="form-divider"></div>

          {/* Action Buttons */}
          <div className="profile-edit__actions">
            <button
              type="submit"
              className="btn btn-primary btn-lg"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Đang lưu...
                </>
              ) : (
                "Lưu thay đổi"
              )}
            </button>

            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={handleCancel}
              disabled={isLoading}
            >
              Hủy
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
