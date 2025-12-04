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

function EditProfile() {
  const { currentUser, updateUser } = useContext(AuthContext);
  const [avatar, setAvatar] = useState(currentUser?.avatar || "");

  const formattedCreateAt = useFormatTime();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // Handle Submit

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.target);
    const { username, email, telephone, address, bio, gender } =
      Object.fromEntries(formData);

    try {
      const res = await axios.put(
        `${API_URL_UPDATE_PROFILE}/${currentUser.id}`,
        {
          username,
          email,
          telephone,
          address,
          bio,
          avatar, // ✅ Gửi avatar từ state
          gender,
        },
        {
          withCredentials: true,
        }
      );

      // ✅ CẬP NHẬT AUTHCONTEXT VÀ LOCALSTORAGE
      const updatedUserInfo = res.data.user;

      // Cập nhật Context
      updateUser(updatedUserInfo);

      // ✅ QUAN TRỌNG: Cập nhật localStorage ngay lập tức
      localStorage.setItem("user", JSON.stringify(updatedUserInfo));

      Swal.fire("Thành công!", "Cập nhật hồ sơ thành công", "success");
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
    }).then((result) => {
      if (result.isConfirmed) {
        setAvatar(currentUser?.avatar || "");

        Swal.fire("Đã hủy", "Các thay đổi đã được hủy bỏ", "info");
      }
    });
  };

  return (
    <div className="profile-section profile-section--edit">
      <div className="profile-edit">
        <div className="profile-edit__header">
          <h2 className="profile-edit__title">Chỉnh sửa hồ sơ</h2>
          <p className="profile-edit__subtitle">
            Cập nhật thông tin cá nhân của bạn
          </p>
        </div>

        <form onSubmit={handleSubmit} className="profile-edit__form">
          {/* Avatar Section */}
          <div className="mb-4 wrap__edit--profile d-flex align-items-center flex-column">
            <LazyLoadImage
              src={avatar || "/default-avatar.png"}
              alt="Avatar"
              key={avatar}
              className="mb-3 profile-edit__avatar-img rounded-circle"
              effect="blur"
              width={120}
              height={120}
              style={{ objectFit: "cover" }}
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

          <div className="row g-4">
            {/* Username */}
            <div className="col-md-6">
              <label className="form-label">Username</label>
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
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                defaultValue={currentUser?.email || ""}
                readOnly
                disabled
              />
            </div>

            {/* Telephone */}
            <div className="col-md-6">
              <label className="form-label">Telephone</label>
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
              </select>
            </div>

            {/* Address */}
            <div className="col-md-6">
              <label className="form-label">Địa chỉ</label>
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
              <label className="form-label">Ngày tạo</label>
              <input
                type="text"
                className="form-control"
                value={formattedCreateAt}
                readOnly
                disabled
              />
            </div>
            {/* Bio */}
            <div className="col-12">
              <label className="form-label">Giới thiệu</label>
              <textarea
                name="bio"
                rows="4"
                className="form-control"
                defaultValue={currentUser?.bio || ""}
                placeholder="Giới thiệu bản thân"
              />
            </div>
          </div>

          <div className="mt-4 profile-edit__actions">
            <button
              type="submit"
              className="btn btn-primary me-3"
              disabled={isLoading}
            >
              {isLoading ? "Đang lưu..." : "Lưu thay đổi"}
            </button>

            <button
              type="button"
              className="btn btn-secondary"
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
