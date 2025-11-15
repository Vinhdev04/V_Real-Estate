// src/features/Services/components/CTASection.jsx
import React from 'react';
import { Phone, Mail } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">Cần Hỗ Trợ Tư Vấn?</h2>
        <p className="cta-subtitle">
          Liên hệ ngay với chúng tôi để được tư vấn miễn phí và nhận báo giá chi tiết
        </p>
        <div className="cta-buttons">
          <button className="cta-btn cta-btn-primary" >
            <Phone size={20} />
            Gọi ngay: 0123 456 789
          </button>
          <button className="cta-btn cta-btn-secondary" >
            <Mail size={20} />
            Gửi yêu cầu
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;