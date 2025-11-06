// src/components/ContactInfoSection.jsx
import ContactInfoCard from './ContactInfoCard';
import '../styles/ContactInfoSection.css';

const contactInfo = [
  {
    icon: 'location',
    title: 'Địa chỉ',
    content: '123 Nguyễn Huệ, Quận 1, TP.HCM',
  },
  {
    icon: 'phone',
    title: 'Điện thoại',
    content: '0123 456 789',
  },
  {
    icon: 'mail',
    title: 'Email',
    content: 'info@realestate.com',
  },
  {
    icon: 'clock',
    title: 'Giờ làm việc',
    content: 'T2-T6: 8:00 - 18:00\nT7: 8:00 - 12:00',
  },
];

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