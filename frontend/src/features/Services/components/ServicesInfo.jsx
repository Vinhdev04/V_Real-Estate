// src/features/Services/components/ServicesInfo.jsx
import React, { useState } from 'react';
import HeroSection from './HeroSection';
import ServiceCard from './ServiceCard';
import ProcessTimeline from './ProcessTimeline';
import CTASection from './CTASection';
import RegistrationModal from './RegistrationModal';
import { services, processSteps } from '../services/data';
import '../styles/ServicesInfo.css';

const ServicesInfo = () => {
  

  return (
    <>
      <HeroSection  />

      {/* Services Grid Section */}
      <section className="services-container">
        <div className="section-header">
          <h2 className="section-title">Dịch Vụ Của Chúng Tôi</h2>
          <p className="section-subtitle">
            Từ tư vấn mua bán đến quản lý tài sản, chúng tôi cung cấp dịch vụ chuyên nghiệp và uy tín
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
             
            />
          ))}
        </div>
      </section>

      <ProcessTimeline steps={processSteps} />

      <CTASection 
      
      />

      <RegistrationModal
      
      />
    </>
  );
};

export default ServicesInfo;