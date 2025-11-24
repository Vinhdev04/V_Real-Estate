import React from 'react';
import "../styles/about.css"
const CTASection = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div className="cta-section">
      <div className="cta-section__content">
        <h2 className="cta-section__title">
          {title}
        </h2>
        <p className="cta-section__subtitle">
          {subtitle}
        </p>
        <button 
          className="cta-section__button"
          onClick={onButtonClick}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default CTASection;
