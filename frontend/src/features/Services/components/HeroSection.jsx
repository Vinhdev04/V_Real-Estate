// src/features/Services/components/HeroSection.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = ({ onConsultClick }) => {
  return (
    <section className="services-hero">
      <div className="services-hero__content">
        <h1 className="services-hero__title">
          Dịch Vụ Bất Động Sản
        </h1>
        <p className="services-hero__subtitle">
          Cung cấp giải pháp toàn diện cho mọi nhu cầu bất động sản của bạn. 
          Từ tư vấn mua bán, cho thuê đến quản lý và đầu tư bất động sản chuyên nghiệp.
        </p>
        <button className="services-hero__btn" onClick={onConsultClick}>
          Tư vấn miễn phí
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;