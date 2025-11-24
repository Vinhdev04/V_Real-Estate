import React from 'react';
import "../styles/about.css"


const StorySection = ({ title, description }) => {
  return (
    <div className="story-section">
      <div className="story-section__header">
        <h2 className="story-section__title">
          {title}
        </h2>
        <p className="story-section__description">
          {description}
        </p>
      </div>
    </div>
  );
};

export default StorySection;