import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropertySearchForm from '../components/PropertySearchForm';
import styles from '../HomePage.module.css';
import { HERO_DATA } from '../constants';

function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {HERO_DATA.title}
            <span className={styles.gradient}>{HERO_DATA.highlight}</span>
          </h1>
          <p className={styles.heroSubtitle}>{HERO_DATA.description}</p>
          
          <div className={styles.heroButtons}>
            <button 
              className={`${styles.button} ${styles.btnPrimary}`}
              onClick={() => navigate('/properties')}
            >
              {HERO_DATA.primaryBtn}
            </button>
            <button 
              className={`${styles.button} ${styles.btnSecondary}`}
            >
              {HERO_DATA.secondaryBtn}
            </button>
          </div>
        </div>

        <div className={styles.heroImage}>
          <img 
            src={HERO_DATA.image} 
            alt="Luxury Property" 
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <h3>Biệt Thự Cao Cấp Thảo Điền</h3>
            <p className={styles.price}>15 Tỷ VND</p>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <PropertySearchForm />
    </section>
  );
}

export default HeroSection;