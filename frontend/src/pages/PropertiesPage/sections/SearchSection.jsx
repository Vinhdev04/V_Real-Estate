import React, { useState } from 'react';
import styles from '../PropertiesPage.module.css';

function SearchSection({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <section className={styles.searchSection}>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Tìm kiếm bất động sản..."
          value={searchTerm}
          onChange={handleSearch}
          className={styles.searchInput}
        />
        <button className={styles.searchButton}>🔍</button>
      </div>
    </section>
  );
}

export default SearchSection;