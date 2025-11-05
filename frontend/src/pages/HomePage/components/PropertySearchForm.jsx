import React, { useState } from 'react';
import styles from '../HomePage.module.css';
import { PROPERTY_TYPES, LOCATIONS, PRICE_RANGES } from '../constants';

function PropertySearchForm() {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    price: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search:', formData);
    // TODO: Implement search logic
  };

  return (
    <form className={styles.searchForm} onSubmit={handleSearch}>
      <div className={styles.formGroup}>
        <label>Loại Bất Động Sản</label>
        <select 
          name="type"
          value={formData.type}
          onChange={handleChange}
        >
          <option value="">Chọn Loại</option>
          {PROPERTY_TYPES.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Khu Vực</label>
        <select 
          name="location"
          value={formData.location}
          onChange={handleChange}
        >
          <option value="">Chọn Khu Vực</option>
          {LOCATIONS.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      <div className={styles.formGroup}>
        <label>Khoảng Giá</label>
        <select 
          name="price"
          value={formData.price}
          onChange={handleChange}
        >
          <option value="">Chọn Khoảng Giá</option>
          {PRICE_RANGES.map(range => (
            <option key={range.label} value={range.label}>{range.label}</option>
          ))}
        </select>
      </div>

      <button type="submit" className={styles.searchButton}>
        🔍 Tìm Kiếm
      </button>
    </form>
  );
}

export default PropertySearchForm;