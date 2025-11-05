import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../HomePage.module.css';

function CTASection() {
  const navigate = useNavigate();

  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaContent}>
        <h2>Sẵn Sàng Bắt Đầu Hành Trình?</h2>
        <p>Tìm ngôi nhà hoàn hảo cho bạn ngay hôm nay</p>
        <button 
          className={`${styles.button} ${styles.btnLight}`}
          onClick={() => navigate('/properties')}
        >
          Khám Phá Ngay
        </button>
      </div>
    </section>
  );
}

export default CTASection;
