// src/features/Services/components/ProcessTimeline.jsx
import React from 'react';
const ProcessTimeline = ({ steps }) => {
  return (
    <section className="process-section">
      <div className="process-section__container">
        <div className="process-section__header">
          <h2 className="process-section__title">Quy Trình Làm Việc</h2>
          <p className="process-section__subtitle">
            Quy trình chuyên nghiệp, minh bạch và hiệu quả - 
            Đảm bảo mọi giao dịch bất động sản của bạn diễn ra suôn sẻ
          </p>
        </div>

        <div className="process-section__timeline">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="process-section__timeline-item">
                <div className="process-section__icon-wrapper">
                  <Icon className="process-section__icon" />
                </div>
                <div className="process-section__number">{step.number}</div>
                <h3 className="process-section__step-title">{step.title}</h3>
                <p className="process-section__step-description">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;