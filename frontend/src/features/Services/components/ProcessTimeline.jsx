// src/features/Services/components/ProcessTimeline.jsx
import React from 'react';

const ProcessTimeline = ({ steps }) => {
  return (
    <section className="process-section">
      <div className="process-container">
        <div className="process-header">
          <h2 className="process-title">Quy Trình Làm Việc</h2>
          <p className="process-subtitle">
            Quy trình chuyên nghiệp, minh bạch và hiệu quả
          </p>
        </div>

        <div className="timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="timeline-item">
                <div className="timeline-icon-wrapper">
                  <Icon className="timeline-icon" />
                </div>
                <div className="timeline-number">{step.number}</div>
                <h3 className="timeline-title">{step.title}</h3>
                <p className="timeline-description">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;