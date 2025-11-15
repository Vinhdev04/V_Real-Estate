// src/features/Profile/components/PropertyCard.jsx
import React from 'react';
import { MapPin, Maximize, Bed, Bath, Trash2 } from 'lucide-react';
import '../styles/propertyCard.css';

const PropertyCard = ({ property, showActions = false, isFavorite = false, onDelete }) => {
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
          {property.bedrooms && (
            <span className="feature">
              <Bed size={16} />
              {property.bedrooms} PN
            </span>
          )}
          {property.bathrooms && (
            <span className="feature">
              <Bath size={16} />
              {property.bathrooms} WC
            </span>
          )}
        </div>
        {property.savedDate && (
          <div className="property-date">Lưu ngày {property.savedDate}</div>
        )}
        {showActions && (
          <div className="property-actions">
            <button className="btn btn-primary btn-small">Xem chi tiết</button>
            <button className="btn btn-info btn-small">Liên hệ</button>
            {isFavorite && (
              <button 
                className="btn btn-danger btn-small"
                onClick={() => onDelete && onDelete(property.id)}
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;