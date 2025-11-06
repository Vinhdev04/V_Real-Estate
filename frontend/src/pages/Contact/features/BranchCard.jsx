// src/components/BranchCard.jsx
import '../styles/BranchCard.css';

function BranchCard({ district, address, phone, email, image }) {
  return (
    <div className="branch-card">
     <div className="branch-image">
        {image ? (
          <img src={image} alt={`Chi nhánh ${district}`} className="branch-img" />
        ) : (
          <div className="image-placeholder" />
        )}
      </div>
      <div className="branch-content">
        <h3 className="branch-title">Chi nhánh {district}</h3>
        <div className="branch-info">
          <p>
            <span className="icon">📍</span> {address}
          </p>
          <p>
            <span className="icon">📞</span> {phone}
          </p>
          <p>
            <span className="icon">✉️</span> {email}
          </p>
        </div>
        <button className="direction-btn">
          <span>Chỉ đường</span>
        </button>
      </div>
    </div>
  );
}

export default BranchCard;