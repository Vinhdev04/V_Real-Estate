import React from 'react';
import "../styles/about.css";

const TimelineSection = ({ title, milestones }) => {
  const colors = ['#41516C', '#FBCA3E', '#E24A68', '#1B5F8C', '#4CADAD'];
  
  return (
    <div className="timeline">
      <div className="timeline__bg-pattern" />
      
      <div className="timeline__container">
        <h1 className="timeline__title">
          <span className="timeline__title-icon">🏢</span>
          {title}
        </h1>
        
        <ul className="timeline__list">
          {milestones.map((milestone, index) => (
            <li 
              key={index} 
              className="timeline__item"
              style={{ '--accent-color': colors[index % colors.length] }}
            >
              <div className="timeline__date">
                {milestone.year}
              </div>
              <div className="timeline__card-title">
                {milestone.title || `Cột mốc ${milestone.year}`}
              </div>
              <div className="timeline__card-description">
                {milestone.event}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimelineSection;