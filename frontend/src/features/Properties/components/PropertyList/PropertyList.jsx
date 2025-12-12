import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Pagination } from 'antd';
import FilterSidebar from '../FilterSidebar/FilterSidebar.jsx';
import PropertyCard from '../PropertyCard/PropertyCard.jsx';
import { mockPropertiesData } from '../../services/data.js';
import { usePropertyFilters } from '../../../../hooks/usePropertyFilters.js';
import { useFavorites } from '../../../../hooks/useFavorites.js';
import { useSidebar } from '../../../../hooks/useSidebar.js';
import './PropertyList.css';
import 'antd/dist/reset.css';

const PropertyList = () => {
    const pageSize = 6;

    // Custom hooks để quản lý logic
    const {
        filters,
        sortBy,
        currentPage,
        filteredProperties,
        paginatedProperties,
        handleFilterChange,
        handlePageChange,
        handleSortChange
    } = usePropertyFilters(mockPropertiesData, pageSize);

    const { toggleFavorite, isFavorite } = useFavorites();

    const { isOpen, openSidebar, closeSidebar } = useSidebar();

    return (
        <div className='properties'>
            <div className='properties__header'>
                <div className='properties__header-content'>
                    <h1 className='properties__title'>Khám phá bất động sản</h1>
                    <p className='properties__subtitle'>
                        Tìm kiếm ngôi nhà mơ ước của bạn
                    </p>
                </div>
            </div>

            <div className='properties__search-bar'>
                <div className='properties__search-wrapper'>
                    <Search className='properties__search-icon' />
                    <input
                        type='text'
                        placeholder='Tìm kiếm theo tên hoặc địa điểm...'
                        value={filters.search}
                        onChange={(e) =>
                            handleFilterChange('search', e.target.value)
                        }
                        className='properties__search-input'
                    />
                </div>
                <button
                    className='properties__filter-toggle'
                    onClick={openSidebar}
                >
                    <SlidersHorizontal size={20} />
                    <span>Bộ lọc</span>
                </button>
            </div>

            <div className='properties__container'>
                <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    isOpen={isOpen}
                    onClose={closeSidebar}
                />

                <main className='properties__main'>
                    <div className='properties__toolbar'>
                        <p className='properties__results-count'>
                            Tìm thấy{' '}
                            <strong>{filteredProperties.length}</strong> bất
                            động sản
                        </p>
                        <select
                            className='properties__sort-select'
                            value={sortBy}
                            onChange={(e) => handleSortChange(e.target.value)}
                        >
                            <option value='default'>Mặc định</option>
                            <option value='price-asc'>Giá tăng dần</option>
                            <option value='price-desc'>Giá giảm dần</option>
                            <option value='rating'>Đánh giá cao nhất</option>
                            <option value='area'>Diện tích lớn nhất</option>
                        </select>
                    </div>

                    <div className='properties__grid'>
                        {paginatedProperties.length > 0 ? (
                            paginatedProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    onFavorite={toggleFavorite}
                                    isFavorite={isFavorite(property.id)}
                                />
                            ))
                        ) : (
                            <div className='properties__empty'>
                                <p>Không tìm thấy bất động sản phù hợp</p>
                                <button
                                    className='properties__reset-btn'
                                    onClick={() => handleFilterChange('reset')}
                                >
                                    Đặt lại bộ lọc
                                </button>
                            </div>
                        )}
                    </div>

                    {filteredProperties.length > pageSize && (
                        <div className='properties__pagination'>
                            <Pagination
                                current={currentPage}
                                total={filteredProperties.length}
                                pageSize={pageSize}
                                onChange={handlePageChange}
                                showSizeChanger={false}
                                showTotal={(total) =>
                                    `Tổng ${total} bất động sản`
                                }
                            />
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default PropertyList;
