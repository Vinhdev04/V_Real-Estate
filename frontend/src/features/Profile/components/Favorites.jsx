 import "../styles/profile.css"
 function Favorites() {
  const properties = [1,2,3,4,5]; // giả lập
  return (
    <div className="bg-white rounded-4 shadow p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Bất động sản yêu thích</h4>
        <div>
          <select className="form-select me-2"><option>Tất cả loại hình</option></select>
          <select className="form-select"><option>Mới nhất</option></select>
        </div>
      </div>

      <div className="row g-4">
        {properties.map((_, i) => (
          <div key={i} className="col-md-6 col-lg-4">
            <div className="property-card bg-white position-relative">
              <img src={`https://images.unsplash.com/photo-15${i}3490493576-7fde63acd811`} className="w-100" alt=""/>
              <div className="heart-btn text-danger">❤️</div>
              <div className="p-3">
                <span className="badge bg-primary mb-2">Căn hộ</span>
                <h6>Căn hộ cao cấp Vinhomes Central Park</h6>
                <p className="small text-muted">Quận Bình Thạnh, TP.HCM • 85m²</p>
                <h5 className="text-primary">5.2 tỷ</h5>
                <div className="d-flex gap-2 mt-3">
                  <button className="btn btn-primary flex-fill rounded-pill">Xem chi tiết</button>
                  <button className="btn btn-outline-primary rounded-circle"><phone /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default  Favorites;