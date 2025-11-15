// src/features/Profile/components/OverviewTab.jsx
import React from 'react';
import StatsCards from './StatsCards';
import PropertyCard from './PropertyCard';
import '../styles/profileTabs.css';

const OverviewTab = ({ stats, recentProperties }) => {
  return (
    <>
      <StatsCards stats={stats} />
      
      <div className="content-section">
        <div className="section-header">
          <h2 className="section-title">Hoạt động gần đây</h2>
        </div>
        <div className="property-grid">
          {recentProperties.map(property => (
            <PropertyCard key={property.id} property={property} showActions />
          ))}
        </div>
      </div>
    </>
  );
};

export default OverviewTab;