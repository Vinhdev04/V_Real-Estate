import React, { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { Pagination } from 'antd';
import FilterSidebar from '../FilterSidebar/FilterSidebar.jsx';
import PropertyCard from '../PropertyCard/PropertyCard.jsx';
import { mockPropertiesData } from '../../services/data.js';
import './PropertyList.css';
import 'antd/dist/reset.css';

const PropertyList = () => {
    // const [filters, setFilters] = useState({
    //     type: 'all',
    //     location: '',
    //     minPrice: '',
    //     maxPrice: '',
    //     bedrooms: '',
    //     minArea: '',
    //     maxArea: '',
    //     search: ''
    // });

    // const [favorites, setFavorites] = useState([]);
    // const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // const [sortBy, setSortBy] = useState('default');
    // const [currentPage, setCurrentPage] = useState(1);
    // const pageSize = 6;

    // const handleFilterChange = (key, value) => {
    //     if (key === 'reset') {
    //         setFilters({
    //             type: 'all',
    //             location: '',
    //             minPrice: '',
    //             maxPrice: '',
    //             bedrooms: '',
    //             minArea: '',
    //             maxArea: '',
    //             search: ''
    //         });
    //         setCurrentPage(1);
    //     } else {
    //         setFilters((prev) => ({ ...prev, [key]: value }));
    //         setCurrentPage(1);
    //     }
    // };

    // const handleFavorite = (id) => {
    //     setFavorites((prev) =>
    //         prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    //     );
    // };

    // const filteredProperties = useMemo(() => {
    //     let result = [...mockPropertiesData];

    //     if (filters.type !== 'all') {
    //         result = result.filter((p) => p.type === filters.type);
    //     }

    //     if (filters.location) {
    //         result = result.filter((p) =>
    //             p.location.includes(filters.location)
    //         );
    //     }

    //     if (filters.minPrice) {
    //         result = result.filter(
    //             (p) => p.priceValue >= parseFloat(filters.minPrice) * 1000000000
    //         );
    //     }
    //     if (filters.maxPrice) {
    //         result = result.filter(
    //             (p) => p.priceValue <= parseFloat(filters.maxPrice) * 1000000000
    //         );
    //     }

    //     if (filters.bedrooms) {
    //         result = result.filter((p) => p.bedrooms >= filters.bedrooms);
    //     }

    //     if (filters.minArea) {
    //         result = result.filter(
    //             (p) => p.area >= parseFloat(filters.minArea)
    //         );
    //     }
    //     if (filters.maxArea) {
    //         result = result.filter(
    //             (p) => p.area <= parseFloat(filters.maxArea)
    //         );
    //     }

    //     if (filters.search) {
    //         result = result.filter(
    //             (p) =>
    //                 p.title
    //                     .toLowerCase()
    //                     .includes(filters.search.toLowerCase()) ||
    //                 p.location
    //                     .toLowerCase()
    //                     .includes(filters.search.toLowerCase())
    //         );
    //     }

    //     switch (sortBy) {
    //         case 'price-asc':
    //             result.sort((a, b) => a.priceValue - b.priceValue);
    //             break;
    //         case 'price-desc':
    //             result.sort((a, b) => b.priceValue - a.priceValue);
    //             break;
    //         case 'rating':
    //             result.sort((a, b) => b.rating - a.rating);
    //             break;
    //         case 'area':
    //             result.sort((a, b) => b.area - a.area);
    //             break;
    //         default:
    //             break;
    //     }

    //     return result;
    // }, [filters, sortBy]);

    // const paginatedProperties = useMemo(() => {
    //     const startIndex = (currentPage - 1) * pageSize;
    //     const endIndex = startIndex + pageSize;
    //     return filteredProperties.slice(startIndex, endIndex);
    // }, [filteredProperties, currentPage]);

    // const handlePageChange = (page) => {
    //     setCurrentPage(page);
    //     window.scrollTo({ top: 0, behavior: 'smooth' });
    // };

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
                        // value={filters.search}
                        // onChange={(e) =>
                        //     handleFilterChange('search', e.target.value)
                        // }
                        className='properties__search-input'
                    />
                </div>
                <button
                    className='properties__filter-toggle'
                    // onClick={() => setIsSidebarOpen(true)}
                >
                    <SlidersHorizontal size={20} />
                    <span>Bộ lọc</span>
                </button>
            </div>

            <div className='properties__container'>
                <FilterSidebar
                // filters={filters}
                // onFilterChange={handleFilterChange}
                // isOpen={isSidebarOpen}
                // onClose={() => setIsSidebarOpen(false)}
                />

                <main className='properties__main'>
                    <div className='properties__toolbar'>
                        <p className='properties__results-count'>
                            Tìm thấy{' '}
                            {/* <strong>{filteredProperties.length}</strong> bất */}
                            động sản
                        </p>
                        <select
                            className='properties__sort-select'
                            // value={sortBy}
                            // onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value='default'>Mặc định</option>
                            <option value='price-asc'>Giá tăng dần</option>
                            <option value='price-desc'>Giá giảm dần</option>
                            <option value='rating'>Đánh giá cao nhất</option>
                            <option value='area'>Diện tích lớn nhất</option>
                        </select>
                    </div>

                    <div className='properties__grid'>
                        {/* {paginatedProperties.length > 0 ? (
                            paginatedProperties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                    onFavorite={handleFavorite}
                                    isFavorite={favorites.includes(property.id)}
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
                        )} */}
                    </div>

                    {/* {filteredProperties.length > pageSize && (
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
                    )} */}
                </main>
            </div>
        </div>
    );
};

export default PropertyList;
