
import "../styles/profile.css"
function AccountActions() {
  return (
    <div className="profile-actions">
      <div className="profile-actions__card profile-actions__card--primary">
        <div className="profile-actions__icon">🔑</div>
        <h6 className="profile-actions__title">Đổi mật khẩu</h6>
        <button className="profile-actions__btn profile-actions__btn--primary">
          <span>Đổi mật khẩu</span>
        </button>
      </div>
      
      <div className="profile-actions__card profile-actions__card--danger">
        <div className="profile-actions__icon">🗑️</div>
        <h6 className="profile-actions__title profile-actions__title--danger">Xóa tài khoản</h6>
        <button className="profile-actions__btn profile-actions__btn--danger">
          <span>Xóa tài khoản</span>
        </button>
      </div>
    </div>
  );
}

export default AccountActions;