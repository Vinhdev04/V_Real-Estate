// components/profile/ViewHistory.jsx
import "../styles/profile.css"
function ViewHistory() {
  const history = [1, 2, 3]; // giả lập

  return (
    <div className="bg-white rounded-4 shadow p-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Lịch sử xem</h4>
          <p className="text-muted">Bạn đã xem 6 bất động sản</p>
        </div>
        <div className="d-flex gap-2">
          <select className="form-select"><option>Tất cả thời gian</option></select>
          <select className="form-select"><option>Xem gần nhất</option></select>
          <button className="btn btn-outline-danger btn-sm rounded-pill">Xóa tất cả</button>
        </div>
      </div>

      {history.map((_, i) => (
        <div key={i} className="border rounded-4 p-4 mb-3 animate__animated animate__fadeIn">
          <div className="row align-items-center">
            <div className="col-md-3">
              <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" className="img-fluid rounded-3" alt="" />
            </div>
            <div className="col-md-6">
              <h6 className="mb-1">Căn hộ Masteri Thảo Điền</h6>
              <p className="text-muted small mb-1">Quận 2, TP.HCM • 78m² • Đã xem 3 lần</p>
              <strong className="text-primary fs-5">4.2 tỷ</strong>
              <p className="text-muted small mt-2">
                <small>⌚ Xem lần cuối: 14:30 20/11/2025</small>
              </p>
            </div>
            <div className="col-md-3 text-end">
              <button className="btn btn-primary rounded-pill me-2">Xem lại</button>
              <button className="btn btn-outline-primary rounded-pill">Liên hệ</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewHistory;