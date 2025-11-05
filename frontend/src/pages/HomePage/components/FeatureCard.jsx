import React from 'react';
import styles from '../HomePage.module.css';

function FeatureCard({ feature }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>
        {feature.icon}
      </div>
      <h3 className={styles.featureTitle}>{feature.title}</h3>
      <p className={styles.featureDesc}>{feature.description}</p>
    </div>
  );
}

export default FeatureCard;

