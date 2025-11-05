import React from 'react';
import HeroSection from './sections/HeroSection';
import FeaturesSection from './sections/FeaturesSection';
import PropertiesSection from './sections/PropertiesSection';
import CTASection from './sections/CTASection';
import styles from './HomePage.module.css';

/**
 * HomePage Component
 * Trang chủ của ứng dụng V_RealEstate
 */
function HomePage() {
  return (
    <div className={styles.container}>
      <HeroSection />
      <PropertiesSection />
      <FeaturesSection />
      <CTASection />
    </div>
  );
}

export default HomePage;