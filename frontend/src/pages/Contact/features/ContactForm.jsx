// src/components/ContactForm.jsx
import MapSection from './MapSection';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="contact-content">
          <div className="form-wrapper">
            <h3>Gửi Tin Nhắn</h3>
            <form className="contact-form">
              <div className="form-row">
                <input type="text" placeholder="Họ và tên *" required />
                <input type="email" placeholder="Email *" required />
              </div>
              <div className="form-row">
                <input type="tel" placeholder="Số điện thoại *" required />
                <select defaultValue="">
                  <option value="" disabled>Dịch vụ quan tâm</option>
                  <option>Mua bán</option>
                  <option>Cho thuê</option>
                  <option>Tư vấn</option>
                </select>
              </div>
              <input type="text" placeholder="Chủ đề" className="full-width" />
              <textarea
                placeholder="Tin nhắn * (tối đa 500 ký tự)"
                maxLength="500"
                rows="5"
                required
                className="full-width"
                defaultValue=""
              ></textarea>
              <div className="char-count">0/500 ký tự</div>
              <button type="submit" className="submit-btn">
                ✉️ Gửi tin nhắn
              </button>
            </form>
          </div>
          <MapSection />
        </div>
      </div>
    </section>
  );
}

export default ContactForm;