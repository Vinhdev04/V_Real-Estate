// src/components/ContactHero.jsx
import '../styles/ContactHero.css';

function ContactHero() {
  return (
    <section className="contact-hero">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Liên Hệ Với Chúng Tôi</h1>
        <p className="hero-subtitle">
          Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho mọi nhu cầu bất động sản của bạn
        </p>
      </div>
    </section>
  );
}

export default ContactHero;