import React from 'react';
import "../styles/about.css"
const StorySection = ({ title, description }) => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto 80px', padding: '0 20px' }}>
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontSize: 36, color: '#333', marginBottom: 16 }}>
          {title}
        </h2>
        <p style={{ fontSize: 18, color: '#666', maxWidth: 800, margin: '0 auto', lineHeight: 1.8 }}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StorySection;