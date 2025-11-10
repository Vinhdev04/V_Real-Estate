import React from 'react';
import { Row, Col } from 'antd';
import ValueCard from './ValueCard';
import "../styles/about.css"
const ValuesSection = ({ title, subtitle, values }) => {
  return (
    <div style={{ maxWidth: 1200, margin: '0 auto 80px', padding: '0 20px' }}>
      <div className="fade-in-up" style={{ textAlign: 'center', marginBottom: 60 }}>
        <h2 style={{ fontSize: 36, color: '#333', marginBottom: 16 }}>
          {title}
        </h2>
        <p style={{ fontSize: 18, color: '#666' }}>
          {subtitle}
        </p>
      </div>

      <Row gutter={[24, 24]}>
        {values.map((value, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <ValueCard value={value} index={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ValuesSection;