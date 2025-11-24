import React from 'react';
import { Card } from 'antd';
import "../styles/about.css"
const ServiceCard = ({ service, index }) => {
  return (
    <Card 
      className={`service-card ${service.highlighted ? 'service-card--highlighted' : ''}`}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="service-card__icon">
        {service.icon}
      </div>
      
      <h3 className="service-card__title">
        {service.title}
      </h3>
      
      <p className="service-card__description">
        {service.description}
      </p>
      
      <div className="service-card__features">
        {service.features.map((feature, idx) => (
          <div key={idx} className="service-card__feature">
            {feature}
          </div>
        ))}
      </div>
      
      {service.highlighted && (
        <div className="service-card__badge">
          Dịch vụ nổi bật
        </div>
      )}
    </Card>
  );
};

export default ServiceCard;