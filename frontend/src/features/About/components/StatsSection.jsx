import React, { useState, useEffect } from 'react';
import { Row, Col, Statistic } from 'antd';
import "../styles/about.css"
const StatsSection = ({ stats }) => {
  const [counters, setCounters] = useState({});

  useEffect(() => {
    const animateCounter = (target, key, duration = 2000) => {
      const increment = target / (duration / 16);
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, 16);
    };

    stats.forEach(stat => {
      animateCounter(stat.value, stat.key);
    });
  }, [stats]);

  return (
    <div style={{ 
      maxWidth: 1200, 
      margin: '-60px auto 80px',
      padding: '0 20px',
      position: 'relative',
      zIndex: 2
    }}>
      <Row gutter={[24, 24]}>
        {stats.map((stat, index) => (
          <Col xs={24} sm={12} md={6} key={index}>
            <div className="counter-box scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <Statistic
                value={counters[stat.key] || 0}
                suffix={stat.suffix}
                valueStyle={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}
              />
              <div style={{ fontSize: 16, marginTop: 8, opacity: 0.9 }}>
                {stat.title}
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default StatsSection;