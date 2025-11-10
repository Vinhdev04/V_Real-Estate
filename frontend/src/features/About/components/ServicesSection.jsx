import React from 'react';
import { Row, Col } from 'antd';
import ServiceCard from './ServiceCard';
import "../styles/about.css"
const ServicesSection = ({ title, subtitle, services }) => {
  return (
    <div style={{ 
      background: '#f8f9fa', 
      padding: '80px 20px',
      marginBottom: 80
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 36, color: '#333', marginBottom: 16 }}>
            {title}
          </h2>
          <p style={{ fontSize: 18, color: '#666' }}>
            {subtitle}
          </p>
        </div>

        <Row gutter={[24, 24]}>
          {services.map((service, index) => (
            <Col xs={24} md={8} key={index}>
              <ServiceCard service={service} index={index} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServicesSection;