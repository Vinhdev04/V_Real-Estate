import React from 'react';
import "../styles/about.css"


const ValueCard = ({ value, index }) => {
  return (
    <div 
      className="value-card" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="value-card__icon">
        {value.icon}
      </div>
      <h3 className="value-card__title">
        {value.title}
      </h3>
      <p className="value-card__description">
        {value.description}
      </p>
    </div>
  );
};

export default ValueCard;