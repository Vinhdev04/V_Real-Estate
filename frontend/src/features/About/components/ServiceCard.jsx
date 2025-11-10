import React from 'react';
import { Card } from 'antd';
import "../styles/about.css"
const ServiceCard = ({ service, index }) => {
  return (
    <Card 
      className={`service-card scale-in ${service.highlighted ? 'highlighted' : ''}`}
      style={{ 
        animationDelay: `${index * 0.2}s`,
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        borderRadius: 16
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: 20 }} className="float-animation">
        {service.icon}
      </div>
      <h3 style={{ fontSize: 22, textAlign: 'center', color: '#333', marginBottom: 16 }}>
        {service.title}
      </h3>
      <p style={{ fontSize: 15, color: '#666', textAlign: 'center', marginBottom: 24, lineHeight: 1.6 }}>
        {service.description}
      </p>
      <div style={{ borderTop: '1px solid #eee', paddingTop: 20 }}>
        {service.features.map((feature, idx) => (
          <div key={idx} className="feature-item">{feature}</div>
        ))}
      </div>
      {service.highlighted && (
        <div style={{
          marginTop: 20,
          padding: '8px 16px',
          background: '#4A90E2',
          color: 'white',
          borderRadius: 20,
          textAlign: 'center',
          fontSize: 14,
          fontWeight: 'bold'
        }}>
          Dịch vụ nổi bật
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;