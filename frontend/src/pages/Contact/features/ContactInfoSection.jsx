// src/components/ContactInfoSection.jsx
import ContactInfoCard from './ContactInfoCard';
import '../styles/ContactInfoSection.css';

import { contactInfo } from '../constants';

function ContactInfoSection() {
  return (
    <section className="contact-info-section">
      <div className="container">
        <h2 className="section-title">Thông Tin Liên Hệ</h2>
        <p className="section-subtitle">
          Nhiều cách để bạn có thể liên hệ và tương tác với chúng tôi
        </p>
        <div className="info-grid">
          {contactInfo.map((item, index) => (
            <ContactInfoCard key={index} {...item} delay={index * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactInfoSection;