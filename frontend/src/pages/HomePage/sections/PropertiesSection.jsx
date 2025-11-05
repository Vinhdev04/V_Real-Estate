import React from 'react';
import PropertyCard from '../components/PropertyCard';
import styles from '../HomePage.module.css';
import { FEATURED_PROPERTIES } from '../constants';

function PropertiesSection() {
  return (
    <section className={styles.propertiesSection}>
      <div className={styles.sectionHeader}>
        <h2>Bất Động Sản Nổi Bật</h2>
        <p>Những dự án hàng đầu được khuyên dùng nhất</p>
      </div>

      <div className={styles.propertiesGrid}>
        {FEATURED_PROPERTIES.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}

export default PropertiesSection;