import "../styles/profile.css";

export default function ProfileOverview() {
  // Lấy user từ localStorage, thêm fallback nếu chưa đăng nhập
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  if (!user) {
    return (
      <div className="p-5 text-center text-muted">
        <h5>Chưa đăng nhập hoặc không tìm thấy thông tin người dùng</h5>
      </div>
    );
  }

  // Hàm format ngày đẹp hơn
  const formatJoinDate = (timestamp) => {
    if (!timestamp || !timestamp.seconds) return "Chưa rõ";

    const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div className="container py-4">
      {/* ==================== HEADER - THÔNG TIN CÁ NHÂN ==================== */}
      <div className="bg-white rounded-4 shadow-sm shadow p-4 p-md-5 mb-4">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
          <div className="d-flex gap-4 flex-grow-1">
            {/* Avatar */}
            <div
              className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center text-primary fs-1 fw-bold flex-shrink-0"
              style={{ width: 120, height: 120 }}
            >
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.username}
                  className="rounded-circle w-100 h-100 object-fit-cover"
                />
              ) : (
                user.username?.charAt(0).toUpperCase() || "U"
              )}
            </div>

            {/* Thông tin text */}
            <div className="pt-3">
              <h3 className="mb-1">{user.username || "Người dùng"}</h3>
              <p className="text-muted mb-2">
                {user.email || "Chưa có email"}
                {user.telephone ? ` • ${user.telephone}` : ""}
              </p>
              <small className="text-muted">
                <i className="bi bi-calendar-check me-1"></i>
                Tham gia từ {user.createdAt}
              </small>
              {user.emailVerified && (
                <span className="badge bg-success ms-3">Đã xác minh email</span>
              )}
            </div>
          </div>

          {/* Nút hành động */}
          <div className="d-flex gap-2 flex-column flex-sm-row">
            <button className="btn btn-primary rounded-pill px-4">
              <i className="bi bi-pencil me-2"></i>Chỉnh sửa hồ sơ
            </button>
            <button className="btn btn-outline-primary rounded-pill px-4">
              <i className="bi bi-gear"></i> Cài đặt
            </button>
          </div>
        </div>
      </div>

      {/* ==================== THỐNG KÊ NHANH ==================== */}
      <div className="row g-3 mb-5">
        {[
          { icon: "❤️", num: 12, label: "Yêu thích" },
          { icon: "👁️", num: 45, label: "Đã xem" },
          { icon: "💾", num: 8, label: "Đã lưu" },
          { icon: "💬", num: 23, label: "Tin nhắn" },
        ].map((stat, index) => (
          <div key={index} className="col-6 col-sm-3">
            <div className="bg-white rounded-4 shadow-sm text-center p-4 h-100">
              <div className="fs-2 mb-2">{stat.icon}</div>
              <h4 className="mb-0 fw-bold">{stat.num}</h4>
              <small className="text-muted">{stat.label}</small>
            </div>
          </div>
        ))}
      </div>

      {/* ==================== NỘI DUNG CHÍNH ==================== */}
      <div className="row g-4">
        {/* Bất động sản đã lưu */}
        <div className="col-lg-8">
          <h5 className="mb-4">Bất động sản đã lưu gần đây</h5>
          <div className="property-card bg-white rounded-4 shadow-sm overflow-hidden mb-3">
            <div className="position-relative">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811"
                alt="Vinhomes Central Park"
                className="w-100"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="position-absolute top-0 end-0 m-3 fs-4">❤️</div>
            </div>
            <div className="p-4">
              <h6 className="fw-bold">Căn hộ cao cấp Vinhomes Central Park</h6>
              <p className="text-muted small mb-2">
                Quận Bình Thạnh, TP.HCM • 85m² • 2 phòng ngủ
              </p>
              <h5 className="text-primary fw-bold">5.2 tỷ</h5>
            </div>
          </div>
          {/* Thêm các card khác ở đây nếu có dữ liệu thực */}
        </div>

        {/* Hoạt động gần đây */}
        <div className="col-lg-4">
          <h5 className="mb-4">Hoạt động gần đây</h5>
          <div className="bg-white rounded-4 shadow-sm p-4">
            <div className="d-flex align-items-center gap-3 mb-3">
              <span className="fs-4 text-danger">❤️</span>
              <div className="small">Đã thích Căn hộ cao cấp Vinhomes Central Park</div>
            </div>
            <div className="d-flex align-items-center gap-3 mb-4">
              <span className="fs-4 text-primary">👁️</span>
              <div className="small">Đã xem Biệt thự Ecopark Grand</div>
            </div>
            <button className="btn btn-outline-primary w-100 rounded-pill">
              Xem tất cả hoạt động
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}