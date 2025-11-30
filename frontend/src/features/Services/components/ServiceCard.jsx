// src/features/Services/components/ServiceCard.jsx
import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
const ServiceCard = ({ service, index, onRegisterClick }) => {
  const Icon = service.icon;

  return (
    <div 
      className="service-card"
      style={{ animationDelay: `${index * 0.15}s` }}
    >
      <div className="service-card__image">
        <LazyLoadImage  src={service.image} alt={service.title} />
        <div className="service-card__icon">
          <Icon size={36} />
        </div>
      </div>
      
      <div className="service-card__content">
        <h3 className="service-card__title">{service.title}</h3>
        <p className="service-card__description">{service.description}</p>
        
        <div className="service-card__features">
          <span className="service-card__features-label">Bao gồm:</span>
          {service.features.map((feature, idx) => (
            <div key={idx} className="service-card__feature-item">
              <Check size={16} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <div className="service-card__footer">
          <div className="service-card__price-wrapper">
            <span className="service-card__price-label">Giá dịch vụ</span>
            <div className="service-card__price">{service.price}</div>
          </div>
          <button 
            className="service-card__btn"
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