import React, { useState, useMemo } from 'react';
import SearchSection from './sections/SearchSection';
import PropertyFilter from './components/PropertyFilter';
import PropertyGrid from './components/PropertyGrid';
import styles from './PropertiesPage.module.css';
import { INITIAL_PROPERTIES } from './constants';

/**
 * PropertiesPage Component
 * Hiển thị danh sách bất động sản với filter và tìm kiếm
 */
function PropertiesPage() {
  const [filters, setFilters] = useState({
    type: '',
    location: '',
    priceMin: 0,
    priceMax: 100,
    search: '',
  });

  const [properties] = useState(INITIAL_PROPERTIES);

  // Lọc bất động sản theo các tiêu chí
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchType = !filters.type || property.type === filters.type;
      const matchLocation = !filters.location || property.location === filters.location;
      const matchPrice = property.price >= filters.priceMin && property.price <= filters.priceMax;
      const matchSearch = !filters.search || 
        property.name.toLowerCase().includes(filters.search.toLowerCase());

      return matchType && matchLocation && matchPrice && matchSearch;
    });
  }, [properties, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const handleResetFilters = () => {
    setFilters({
      type: '',
      location: '',
      priceMin: 0,
      priceMax: 100,
      search: '',
    });
  };

  return (
    <div className={styles.container}>
      <SearchSection onSearch={(search) => handleFilterChange({ search })} />
      
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <PropertyFilter 
            filters={filters}
            onFilterChange={handleFilterChange}
            onReset={handleResetFilters}
          />
        </aside>

        <main className={styles.main}>
          <div className={styles.resultsHeader}>
            <h2>Kết Quả Tìm Kiếm</h2>
            <p>{filteredProperties.length} bất động sản được tìm thấy</p>
          </div>

          {filteredProperties.length > 0 ? (
            <PropertyGrid properties={filteredProperties} />
          ) : (
            <div className={styles.noResults}>
              <p>😔 Không tìm thấy bất động sản phù hợp</p>
              <p className={styles.noResultsDesc}>Hãy thử thay đổi các tiêu chí lọc</p>
              <button 
                className={styles.resetButton}
                onClick={handleResetFilters}
              >
                ↺ Xóa Bộ Lọc
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default PropertiesPage;