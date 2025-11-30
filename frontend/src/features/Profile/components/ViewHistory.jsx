// components/profile/ViewHistory.jsx
import "../styles/profile.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
function ViewHistory() {
  const history = [1, 2, 3];

  return (
    <div className="profile-section">
      <div className="profile-history__header">
        <div className="profile-history__info">
          <h4>Lịch sử xem</h4>
          <p>Bạn đã xem 6 bất động sản</p>
        </div>
        <div className="profile-history__filters">
          <select className="profile-history__select">
            <option>Tất cả thời gian</option>
          </select>
          <select className="profile-history__select">
            <option>Xem gần nhất</option>
          </select>
          <button className="profile-history__clear-btn">Xóa tất cả</button>
        </div>
      </div>

      {history.map((_, i) => (
        <div key={i} className="profile-history__item">
          <div className="row align-items-center">
            <div className="col-md-3">
              <LazyLoadImage 
                src="https://images.unsplash.com/photo-1568605114967-8130f3a36994" 
                className="profile-history__image" 
                alt="Property" 
              />
            </div>
            <div className="col-md-6">
              <div className="profile-history__content">
                <h6>Căn hộ Masteri Thảo Điền</h6>
                <p className="profile-history__location">
                  Quận 2, TP.HCM • 78m² • Đã xem 3 lần
                </p>
                <div className="profile-history__price">4.2 tỷ</div>
                <p className="profile-history__time">
                  ⌚ Xem lần cuối: 14:30 20/11/2025
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="profile-history__actions">
                <button className="profile-history__btn profile-history__btn--primary text-dark">
                  Xem lại
                </button>
                <button className="profile-history__btn profile-history__btn--outline">
                  Liên hệ
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewHistory;