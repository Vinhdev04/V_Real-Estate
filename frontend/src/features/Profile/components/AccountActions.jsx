
import "../styles/profile.css"
function AccountActions() {
  return (
    <div className="row g-4 mt-5">
      <div className="col-md-6">
        <div className="bg-white rounded-4 shadow p-4 text-center">
          <div className="fs-1 text-primary mb-3">🔑</div>
          <h6>Đổi mật khẩu</h6>
          <button className="btn btn-outline-primary rounded-pill mt-2">Đổi mật khẩu</button>
        </div>
      </div>
      <div className="col-md-6">
        <div className="bg-white rounded-4 shadow p-4 text-center">
          <div className="fs-1 text-danger mb-3">🗑️</div>
          <h6 className="text-danger">Xóa tài khoản</h6>
          <button className="btn btn-outline-danger rounded-pill mt-2">Xóa tài khoản</button>
        </div>
      </div>
    </div>
  );
}
export default AccountActions;