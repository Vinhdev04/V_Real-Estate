 import "../styles/profile.css"
 function Favorites() {
  const properties = [1, 2, 3, 4, 5];
  
  return (
    <div className="profile-section">
      <div className="profile-favorites__header">
        <h4 className="profile-favorites__title">Bất động sản yêu thích</h4>
        <div className="profile-favorites__filters">
          <select className="profile-favorites__select">
            <option>Tất cả loại hình</option>
          </select>
          <select className="profile-favorites__select">
            <option>Mới nhất</option>
          </select>
        </div>
      </div>

      <div className="row g-4">
        {properties.map((_, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div className="property-card">
              <div className="property-card__image">
                <img 
                  src={`https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400`} 
                  alt="Property"
                />
                <div className="property-card__heart">❤️</div>
              </div>
              
              <div className="property-card__content">
                <span className="property-card__badge">Căn hộ</span>
                <h6 className="property-card__title">
                  Căn hộ cao cấp Vinhomes Central Park
                </h6>
                <p className="property-card__info">
                  Quận Bình Thạnh, TP.HCM • 85m²
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
        ))}
      </div>
    </div>
  );
}

export default Favorites;