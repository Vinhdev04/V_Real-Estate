// src/features/Profile/components/FavoritesTab.jsx
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import PropertyCard from './PropertyCard';
import '../styles/profileTabs.css';

const FavoritesTab = ({ properties, onDelete }) => {
  const [filterType, setFilterType] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const filteredProperties = properties.filter(prop => {
    if (filterType === 'all') return true;
    return prop.type === filterType;
  });

  return (
    <div className="content-section">
      <div className="section-header">
        <h2 className="section-title">Bất động sản yêu thích ({filteredProperties.length})</h2>
        <div className="filters">
          <select 
            className="filter-select"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">Tất cả loại hình</option>
            <option value="Căn hộ">Căn hộ</option>
            <option value="Biệt thự">Biệt thự</option>
            <option value="Chung cư">Chung cư</option>
          </select>
          <select 
            className="filter-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="newest">Mới nhất</option>
            <option value="price-low">Giá thấp nhất</option>
            <option value="price-high">Giá cao nhất</option>
          </select>
        </div>
      </div>
      {filteredProperties.length > 0 ? (
        <div className="property-grid">
          {filteredProperties.map(property => (
            <PropertyCard 
              key={property.id} 
              property={property} 
              showActions 
              isFavorite 
              onDelete={onDelete}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Heart size={64} />
          <h3>Chưa có bất động sản yêu thích</h3>
          <p>Hãy khám phá và lưu những bất động sản bạn quan tâm</p>
        </div>
      )}
    </div>
  );
};

export default FavoritesTab;