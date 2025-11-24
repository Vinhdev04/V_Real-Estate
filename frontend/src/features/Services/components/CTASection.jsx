// src/features/Services/components/CTASection.jsx
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const CTASection = ({ onContactClick }) => {
  return (
    <section className="cta-section">
      <div className="cta-section__container">
        <h2 className="cta-section__title text-dark">Cần Hỗ Trợ Tư Vấn?</h2>
        <p className="cta-section__subtitle text-white">
          Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết. 
          Đội ngũ chuyên viên bất động sản giàu kinh nghiệm sẵn sàng hỗ trợ bạn 24/7.
        </p>
        <div className="cta-section__buttons">
          <button 
            className="cta-section__btn cta-section__btn--primary"
            onClick={() => window.location.href = 'tel:0123456789'}
          >
            <Phone size={20} />
            Gọi ngay: 0123 456 789
          </button>
          <button 
            className="cta-section__btn cta-section__btn--secondary"
            onClick={onContactClick}
          >
            <Mail size={20} />
            Gửi yêu cầu
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;