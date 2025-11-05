import React from 'react';
import PropertyCard from './PropertyCard';
import styles from '../PropertiesPage.module.css';

function PropertyGrid({ properties }) {
  return (
    <div className={styles.grid}>
      {properties.map(property => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyGrid;