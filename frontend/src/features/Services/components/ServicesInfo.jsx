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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleConsultClick = () => {
    setIsModalOpen(true);
    setSelectedService(null);
  };

  const handleRegisterClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <HeroSection onConsultClick={handleConsultClick} />

      {/* Services Grid Section */}
      <section className="services-container">
        <div className="services-container__header">
          <h2 className="services-container__title">
            Dịch Vụ Của Chúng Tôi
          </h2>
          <p className="services-container__subtitle">
            Từ tư vấn mua bán đến quản lý tài sản, chúng tôi cung cấp dịch vụ 
            chuyên nghiệp và uy tín với đội ngũ chuyên gia giàu kinh nghiệm
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={index}
              onRegisterClick={handleRegisterClick}
            />
          ))}
        </div>
      </section>

      <ProcessTimeline steps={processSteps} />

      <CTASection onContactClick={handleConsultClick} />

      {isModalOpen && (
        <RegistrationModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          service={selectedService}
        />
      )}
    </>
  );
};

export default ServicesInfo;