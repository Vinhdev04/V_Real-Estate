import React from 'react';
import { Row, Col } from 'antd';
import ServiceCard from './ServiceCard';
import "../styles/about.css"
const ServicesSection = ({ title, subtitle, services }) => {
  return (
    <div className="services-section">
      <div className="services-section__container">
        <div className="services-section__header">
          <h2 className="services-section__title">
            {title}
          </h2>
          <p className="services-section__subtitle">
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