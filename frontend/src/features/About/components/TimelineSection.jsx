import React from 'react';
import "../styles/about.css";

const TimelineSection = ({ title, milestones }) => {
  const colors = ['#41516C', '#FBCA3E', '#E24A68', '#1B5F8C', '#4CADAD'];
  
  return (
    <div className="timeline-wrapper">
      {/* Animated background */}
      <div className="timeline-bg-pattern"></div>
      
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 20px', position: 'relative', zIndex: 1 }}>
        <h1 className="timeline-title">
          <span className="title-icon">🏢</span>
          {title}
        </h1>
        <ul className="timeline-list">
          {milestones.map((milestone, index) => (
            <li key={index} style={{ '--accent-color': colors[index % colors.length] }}>
              <div className="date">{milestone.year}</div>
              <div className="title">{milestone.title || `Cột mốc ${milestone.year}`}</div>
              <div className="descr">{milestone.event}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineSection;