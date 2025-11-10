import React from 'react';
import "../styles/about.css"
const CTASection = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '80px 20px',
      textAlign: 'center',
      color: 'white'
    }}>
      <h2 style={{ fontSize: 36, marginBottom: 20 }}>
        {title}
      </h2>
      <p style={{ fontSize: 18, marginBottom: 30, opacity: 0.9 }}>
        {subtitle}
      </p>
      <button 
        onClick={onButtonClick}
        style={{
          padding: '15px 40px',
          fontSize: 18,
          fontWeight: 'bold',
          background: 'white',
          color: '#667eea',
          border: 'none',
          borderRadius: 30,
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
        }}
        onMouseOver={(e) => {
          e.target.style.transform = 'scale(1.05)';
          e.target.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
        }}
        onMouseOut={(e) => {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default CTASection;
