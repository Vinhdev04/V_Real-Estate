import React from 'react';
import "../styles/about.css"
const ValueCard = ({ value, index }) => {
  return (
    <div className="value-card scale-in" style={{ 
      animationDelay: `${index * 0.1}s`,
      textAlign: 'center'
    }}>
      <div className="value-icon" style={{ 
        fontSize: 48, 
        color: '#4A90E2',
        marginBottom: 16
      }}>
        {value.icon}
      </div>
      <h3 style={{ fontSize: 20, color: '#333', marginBottom: 12 }}>
        {value.title}
      </h3>
      <p style={{ fontSize: 15, color: '#666', lineHeight: 1.6 }}>
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;