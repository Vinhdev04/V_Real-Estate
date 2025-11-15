// src/features/Profile/components/HistoryCard.jsx
import React from 'react';
import { MapPin, Maximize, Eye, X } from 'lucide-react';
import '../styles/propertyCard.css';

const HistoryCard = ({ property, onDelete }) => {
  const getBadgeClass = (type) => {
    if (type === 'Căn hộ') return 'badge-apartment';
    if (type === 'Biệt thự') return 'badge-villa';
    return 'badge-condo';
  };

  return (
    <div className="property-card">
      <img src={property.image} alt={property.title} className="property-image" />
      <div className="property-content">
        <span className={`property-badge ${getBadgeClass(property.type)}`}>
          {property.type}
        </span>
        <h3 className="property-title">{property.title}</h3>
        <div className="property-location">
          <MapPin size={16} />
          <span>{property.location}</span>
        </div>
        <div className="property-price">{property.price}</div>
        <div className="property-features">
          <span className="feature">
            <Maximize size={16} />
            {property.area}
          </span>
          <span className="feature">
            <Eye size={16} />
            Đã xem {property.viewCount} lần
          </span>
        </div>
        <div className="property-date">Xem lần cuối: {property.viewDate}</div>
        <div className="property-actions">
          <button className="btn btn-primary btn-small">Xem lại</button>
          <button className="btn btn-info btn-small">Liên hệ</button>
          <button 
            className="btn btn-danger btn-small"
            onClick={() => onDelete && onDelete(property.id)}
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;