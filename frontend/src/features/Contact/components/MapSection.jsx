// src/components/MapSection.jsx
import '../styles/MapSection.css';

function MapSection() {
  return (
    <div className="map-container">
      <iframe 
        title="Bản đồ chi nhánh"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.447!2d106.698!3d10.778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f62a2b7e46d%3A0x4e8f7c7d3b8e8e8e!2sNguy%E1%BB%85n%20Hu%E1%BB%87%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh!5e0!3m2!1svi!2s!4v1700000000000!5m2!1svi!2s"
        allowFullScreen=""
        loading="lazy"
        className="map-iframe"
      ></iframe>
      <div className="map-overlay">
        <div className="popup">
          <strong>Nguyễn Huệ</strong>
          <p>Bến Nghé, Quận 1, Thành phố Hồ Chí Minh</p>
          <div className="rating">
            <span>4.7 ★★★★★ 861 bài viết</span>
          </div>
          <button className="directions-btn">Chỉ đường</button>
        </div>
      </div>
    </div>
  );
}

export default MapSection;