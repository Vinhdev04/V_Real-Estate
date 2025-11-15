// src/features/Services/components/HeroSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ onConsultClick }) => {
  return (
    <section className="services-hero">
      <div className="hero-content">
        <h1 className="hero-title">Dịch Vụ Bất Động Sản</h1>
        <p className="hero-subtitle">
          Cung cấp giải pháp toàn diện cho mọi nhu cầu bất động sản của bạn
        </p>
        <button className="hero-btn" onClick={onConsultClick}>
          Tư vấn miễn phí
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;