import "../styles/profile.css";

export default function ProfileOverview() {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  if (!user) {
    return (
      <div className="profile-section">
        <div className="p-5 text-center text-muted">
          <div className="profile-empty">
            <div className="profile-empty__icon">🔒</div>
            <h5 className="profile-empty__title">Chưa đăng nhập</h5>
            <p className="profile-empty__text">Vui lòng đăng nhập để xem thông tin cá nhân</p>
            <button 
              className="profile-form__btn profile-form__btn--primary text-primary"
              onClick={() => window.location.href = '/login'}
            >
              Đăng nhập ngay
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile">
      {/* Header */}
      <div className="profile-header">
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-start gap-4">
          <div className="d-flex gap-3 gap-md-4 flex-grow-1 align-items-center flex-column flex-sm-row text-center text-sm-start">
            <div className="profile-header__avatar">
              {user.avatar ? (
                <img src={user.avatar} alt={user.username} />
              ) : (
                user.username?.charAt(0).toUpperCase() || "U"
              )}
            </div>

            <div className="profile-header__info">
              <h3 className="profile-header__name">
                {user.username || "Người dùng"}
              </h3>
              <p className="profile-header__contact">
                {user.email || "Chưa có email"}
                {user.telephone && ` • ${user.telephone}`}
              </p>
              <small className="profile-header__joined">
                📅 Tham gia từ {user.createdAt || "Chưa rõ"}
              </small>
              {user.emailVerified && (
                <span className="profile-header__badge">✓ Đã xác minh email</span>
              )}
            </div>
          </div>

          <div className="profile-header__actions">
            <button className="profile-header__btn profile-header__btn--primary">
              ✏️ Chỉnh sửa
            </button>
            <button className="profile-header__btn profile-header__btn--outline">
              ⚙️ Cài đặt
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="profile-stats">
        {[
          { icon: "❤️", num: 12, label: "Yêu thích" },
          { icon: "👁️", num: 45, label: "Đã xem" },
          { icon: "💾", num: 8, label: "Đã lưu" },
          { icon: "💬", num: 23, label: "Tin nhắn" },
        ].map((stat, index) => (
          <div key={index} className="profile-stats__card">
            <span className="profile-stats__icon">{stat.icon}</span>
            <h4 className="profile-stats__number">{stat.num}</h4>
            <p className="profile-stats__label">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="row g-4">
        <div className="col-lg-8">
          <h5 className="profile-section__title">Bất động sản đã lưu gần đây</h5>
          <div className="property-card">
            <div className="property-card__image">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800"
                alt="Vinhomes Central Park"
              />
              <div className="property-card__heart">❤️</div>
            </div>
            <div className="property-card__content">
              <span className="property-card__badge">Căn hộ</span>
              <h6 className="property-card__title">
                Căn hộ cao cấp Vinhomes Central Park
              </h6>
              <p className="property-card__info">
                Quận Bình Thạnh, TP.HCM • 85m² • 2 phòng ngủ
              </p>
              <div className="property-card__price">5.2 tỷ</div>
              <div className="property-card__actions">
                <button className="property-card__btn property-card__btn--primary">
                  Xem chi tiết
                </button>
                <button className="property-card__btn property-card__btn--icon">
                  📞
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="profile-activity">
            <h5 className="profile-activity__title">Hoạt động gần đây</h5>
            
            <div className="profile-activity__item">
              <span className="profile-activity__icon">❤️</span>
              <div className="profile-activity__text">
                Đã thích Căn hộ cao cấp Vinhomes Central Park
              </div>
            </div>
            
            <div className="profile-activity__item">
              <span className="profile-activity__icon">👁️</span>
              <div className="profile-activity__text">
                Đã xem Biệt thự Ecopark Grand
              </div>
            </div>
            
            <div className="profile-activity__item">
              <span className="profile-activity__icon">💾</span>
              <div className="profile-activity__text">
                Đã lưu Nhà phố Thảo Điền
              </div>
            </div>
            
            <button className="profile-activity__btn">
              <span>Xem tất cả hoạt động</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}