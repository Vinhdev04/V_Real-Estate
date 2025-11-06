import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../PropertiesPage.module.css';

function PropertyCard({ property }) {
  const navigate = useNavigate();

  return (
    <div 
      className={styles.card}
      onClick={() => navigate(`/properties/${property.id}`)}
    >
      <div className={styles.imageContainer}>
        <img src={property.image} alt={property.name} className={styles.image} />
        <span className={styles.badge}>{property.type}</span>
        {property.featured && (
          <span className={styles.featuredBadge}>⭐ Nổi Bật</span>
        )}
      </div>

      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{property.name}</h3>
        
        <p className={styles.cardLocation}>📍 {property.location}</p>
        
        <p className={styles.cardPrice}>{property.price} Tỷ VND</p>

        <div className={styles.cardFeatures}>
          <span title="Phòng ngủ">🛏️ {property.bedrooms}</span>
          <span title="Phòng tắm">🚿 {property.bathrooms}</span>
          <span title="Diện tích">📐 {property.area}m²</span>
        </div>

        <button className={styles.cardButton}>Chi Tiết →</button>
      </div>
    </div>
  );
}

export default PropertyCard;