import React, { useState } from 'react';
import { Pagination } from 'antd';
import {
    Heart,
    MapPin,
    Bed,
    Bath,
    Square,
    Star,
    Search,
    Filter,
    Phone,
    X,
    Home,
    Building2,
    DollarSign,
    Ruler
} from 'lucide-react';
import '../styles/PropertyLayout.css';
import PropertyCard from './PropertyCard';
import PropertySideBar from './PropertySideBar';

// Main Layout Component
const PropertyLayout = () => {
    const [viewMode, setViewMode] = useState('grid');
    const [sortBy, setSortBy] = useState('newest');
    const [showMobileSidebar, setShowMobileSidebar] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 6;

    const properties = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
            title: 'Căn hộ cao cấp Vista Verde',
            location: 'Quận 2, TP. Hồ Chí Minh',
            price: '8.5 tỷ',
            bedrooms: 3,
            bathrooms: 2,
            area: 120,
            rating: 4.8,
            badge: 'Nổi bật'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
            title: 'Biệt thự hiện đại Thảo Điền',
            location: 'Quận 2, TP. Hồ Chí Minh',
            price: '25 tỷ',
            bedrooms: 5,
            bathrooms: 4,
            area: 300,
            rating: 4.9,
            badge: 'Hot'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
            title: 'Nhà phố thương mại Sunrise City',
            location: 'Quận 7, TP. Hồ Chí Minh',
            price: '15 tỷ',
            bedrooms: 4,
            bathrooms: 3,
            area: 200,
            rating: 4.7,
            badge: 'Mới'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800',
            title: 'Căn hộ duplex The EverRich',
            location: 'Quận 5, TP. Hồ Chí Minh',
            price: '12 tỷ',
            bedrooms: 4,
            bathrooms: 3,
            area: 180,
            rating: 4.6,
            badge: 'Giảm giá'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
            title: 'Penthouse Diamond Island',
            location: 'Quận 2, TP. Hồ Chí Minh',
            price: '35 tỷ',
            bedrooms: 5,
            bathrooms: 5,
            area: 400,
            rating: 5.0,
            badge: 'Cao cấp'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
            title: 'Nhà vườn Thủ Đức Garden',
            location: 'TP. Thủ Đức, TP. Hồ Chí Minh',
            price: '18 tỷ',
            bedrooms: 6,
            bathrooms: 4,
            area: 350,
            rating: 4.8,
            badge: 'Độc quyền'
        }
    ];

    return (
        <div className='re-property-layout'>
            {/* Hero Section */}
            <section className='re-hero'>
                <div className='re-hero__overlay'></div>
                <div className='re-hero__content'>
                    <h1 className='re-hero__title'>
                        Tìm Ngôi Nhà Mơ Ước Của Bạn
                    </h1>
                    <p className='re-hero__subtitle'>
                        Khám phá hàng nghìn bất động sản cao cấp tại TP. Hồ Chí
                        Minh
                    </p>

                    <div className='re-hero__search'>
                        <div className='re-hero__tabs'>
                            <button className='re-hero__tab re-hero__tab--active'>
                                Mua
                            </button>
                            <button className='re-hero__tab'>Thuê</button>
                        </div>
                        <div className='re-hero__search-bar'>
                            <div className='re-hero__search-input'>
                                <Search size={20} color='#94a3b8' />
                                <input
                                    type='text'
                                    placeholder='Tìm theo địa điểm, dự án...'
                                />
                            </div>
                            <button className='re-hero__search-btn'>
                                Tìm kiếm
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <div className='re-container'>
                <button
                    className='re-mobile-filter-btn'
                    onClick={() => setShowMobileSidebar(!showMobileSidebar)}
                >
                    <Filter size={20} />
                    Bộ lọc
                </button>

                <div className='re-row'>
                    {/* Sidebar */}
                    <div
                        className={`re-col-sidebar ${
                            showMobileSidebar
                                ? 're-col-sidebar--mobile-active'
                                : ''
                        }`}
                    >
                        <div className='re-sidebar-header'>
                            <h2>Bộ lọc tìm kiếm</h2>
                            <button
                                className='re-sidebar-close'
                                onClick={() => setShowMobileSidebar(false)}
                            >
                                <X size={24} />
                            </button>
                        </div>
                        <PropertySideBar />
                    </div>

                    {/* Overlay */}
                    {showMobileSidebar && (
                        <div
                            className='re-sidebar-overlay re-sidebar-overlay--active'
                            onClick={() => setShowMobileSidebar(false)}
                        />
                    )}

                    {/* Main Content */}
                    <div className='re-col-main'>
                        {/* Toolbar */}
                        <div className='re-toolbar'>
                            <div className='re-toolbar__info'>
                                <h2>Bất động sản bán</h2>
                                <span className='re-toolbar__count'>
                                    Tìm thấy {properties.length} kết quả
                                </span>
                            </div>

                            <div className='re-toolbar__actions'>
                                <div className='re-toolbar__sort'>
                                    <span>Sắp xếp:</span>
                                    <select
                                        className='re-toolbar__select'
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                    >
                                        <option value='newest'>Mới nhất</option>
                                        <option value='price-low'>
                                            Giá thấp đến cao
                                        </option>
                                        <option value='price-high'>
                                            Giá cao đến thấp
                                        </option>
                                        <option value='area'>Diện tích</option>
                                    </select>
                                </div>

                                <div className='re-toolbar__view'>
                                    <button
                                        className={`re-toolbar__view-btn ${
                                            viewMode === 'grid'
                                                ? 're-toolbar__view-btn--active'
                                                : ''
                                        }`}
                                        onClick={() => setViewMode('grid')}
                                    >
                                        ⊞
                                    </button>
                                    <button
                                        className={`re-toolbar__view-btn ${
                                            viewMode === 'list'
                                                ? 're-toolbar__view-btn--active'
                                                : ''
                                        }`}
                                        onClick={() => setViewMode('list')}
                                    >
                                        ☰
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Property Grid */}
                        <div
                            className={`re-property-grid ${
                                viewMode === 'list'
                                    ? 're-property-grid--list'
                                    : ''
                            }`}
                        >
                            {properties.map((property) => (
                                <PropertyCard
                                    key={property.id}
                                    property={property}
                                />
                            ))}
                        </div>

                        {/* Ant Design Pagination */}
                        <Pagination
                            current={currentPage}
                            total={properties.length * 4}
                            pageSize={pageSize}
                            onChange={(page) => setCurrentPage(page)}
                            showSizeChanger={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyLayout;
