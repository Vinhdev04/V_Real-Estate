import React from 'react';
import { Row, Col } from 'antd';
import ValueCard from './ValueCard';
import "../styles/about.css"


const ValuesSection = ({ title, subtitle, values }) => {
  return (
    <div className="values-section">
      <div className="values-section__header">
        <h2 className="values-section__title">
          {title}
        </h2>
        <p className="values-section__subtitle">
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