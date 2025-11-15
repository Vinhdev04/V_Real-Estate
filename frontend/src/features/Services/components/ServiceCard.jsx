// src/features/Services/components/ServiceCard.jsx
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';

const ServiceCard = ({ service, index, onRegisterClick }) => {
  const Icon = service.icon;

  return (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="service-image">
        <img src={service.image} alt={service.title} />
        <div className="service-icon">
          <Icon size={32} />
        </div>
      </div>
      
      <div className="service-content">
        <h3 className="service-title">{service.title}</h3>
        <p className="service-description">{service.description}</p>
        
        <div className="service-features">
          <span className="features-label">Bao gồm:</span>
          {service.features.map((feature, idx) => (
            <div key={idx} className="feature-item">
              <Check size={16} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="service-footer">
          <div>
            <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginBottom: '0.25rem' }}>
              Giá dịch vụ
            </div>
            <div className="service-price">{service.price}</div>
          </div>
          <button 
            className="service-btn"
            onClick={() => onRegisterClick(service)}
          >
            Đăng ký
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;