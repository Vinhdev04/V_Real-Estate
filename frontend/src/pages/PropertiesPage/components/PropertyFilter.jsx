import React from 'react';
import styles from '../PropertiesPage.module.css';
import { PROPERTY_TYPES, LOCATIONS, PRICE_RANGES } from '../constants';

function PropertyFilter({ filters, onFilterChange, onReset }) {
  const handleChange = (field, value) => {
    onFilterChange({ [field]: value });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.filterHeader}>
        <h3>🔍 Bộ Lọc</h3>
        <button 
          className={styles.filterClear}
          onClick={onReset}
          title="Xóa tất cả bộ lọc"
        >
          ↺
        </button>
      </div>

      {/* Property Type */}
      <div className={styles.filterGroup}>
        <label>Loại Bất Động Sản</label>
        <select 
          value={filters.type}
          onChange={(e) => handleChange('type', e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">Tất Cả</option>
          {PROPERTY_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Location */}
      <div className={styles.filterGroup}>
        <label>Khu Vực</label>
        <select 
          value={filters.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className={styles.filterSelect}
        >
          <option value="">Tất Cả</option>
          {LOCATIONS.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className={styles.filterGroup}>
        <label>Khoảng Giá (Tỷ VND)</label>
        <div className={styles.priceInputs}>
          <input 
            type="number" 
            placeholder="Từ"
            value={filters.priceMin}
            onChange={(e) => handleChange('priceMin', parseInt(e.target.value) || 0)}
            className={styles.priceInput}
            min="0"
            max="100"
          />
          <span className={styles.priceDash}>-</span>
          <input 
            type="number" 
            placeholder="Đến"
            value={filters.priceMax}
            onChange={(e) => handleChange('priceMax', parseInt(e.target.value) || 100)}
            className={styles.priceInput}
            min="0"
            max="100"
          />
        </div>
      </div>

      {/* Reset Button */}
      <button 
        className={styles.resetBtn}
        onClick={onReset}
      >
        Xóa Tất Cả
      </button>
    </div>
  );
}

export default PropertyFilter;