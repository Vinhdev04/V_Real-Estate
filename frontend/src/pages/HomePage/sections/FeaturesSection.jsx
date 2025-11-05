import React from 'react';
import FeatureCard from '../components/FeatureCard';
import styles from '../HomePage.module.css';
import { FEATURES } from '../constants';

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.sectionHeader}>
        <h2>Tại Sao Chọn V_RealEstate?</h2>
        <p>Những lợi ích mà chúng tôi mang lại</p>
      </div>

      <div className={styles.featuresGrid}>
        {FEATURES.map(feature => (
          <FeatureCard key={feature.id} feature={feature} />
        ))}
      </div>
    </section>
  );
}

export default FeaturesSection;