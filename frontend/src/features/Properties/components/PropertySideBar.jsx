import React, { useState } from 'react';

import '../styles/PropertySideBar.css';

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

import '../styles/PropertySideBar.css';

// PropertySideBar Component
const PropertySideBar = () => {
    const [selectedType, setSelectedType] = useState('all');

    const propertyTypes = [
        { value: 'all', label: 'Tất cả', icon: Home },
        { value: 'apartment', label: 'Căn hộ', icon: Building2 },
        { value: 'house', label: 'Nhà riêng', icon: Home },
        { value: 'villa', label: 'Biệt thự', icon: Building2 },
        { value: 'land', label: 'Đất nền', icon: Square }
    ];

    const locations = [
        'Quận 1',
        'Quận 2',
        'Quận 3',
        'Quận 7',
        'Thủ Đức',
        'Bình Thạnh',
        'Phú Nhuận'
    ];

    return (
        <div className='re-filter-sidebar'>
            <div className='re-filter-sidebar__header'>
                <h2 className='re-filter-sidebar__title'>
                    <Filter size={20} />
                    Bộ lọc tìm kiếm
                </h2>
                <button className='re-filter-sidebar__reset-btn'>
                    Đặt lại
                </button>
            </div>

            <div className='re-filter-sidebar__body'>
                <div className='re-filter-sidebar__section'>
                    <h3 className='re-filter-sidebar__section-title'>
                        <Building2 size={18} />
                        Loại bất động sản
                    </h3>
                    <div className='re-filter-sidebar__type-list'>
                        {propertyTypes.map((type) => (
                            <button
                                key={type.value}
                                className={`re-filter-sidebar__type-btn ${
                                    selectedType === type.value
                                        ? 're-filter-sidebar__type-btn--active'
                                        : ''
                                }`}
                                onClick={() => setSelectedType(type.value)}
                            >
                                {type.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className='re-filter-sidebar__section'>
                    <h3 className='re-filter-sidebar__section-title'>
                        <DollarSign size={18} />
                        Khoảng giá (tỷ VNĐ)
                    </h3>
                    <div className='re-filter-sidebar__price-range'>
                        <input
                            type='number'
                            placeholder='Từ'
                            className='re-filter-sidebar__input'
                        />
                        <span className='re-filter-sidebar__price-divider'>
                            -
                        </span>
                        <input
                            type='number'
                            placeholder='Đến'
                            className='re-filter-sidebar__input'
                        />
                    </div>
                </div>

                <div className='re-filter-sidebar__section'>
                    <h3 className='re-filter-sidebar__section-title'>
                        <Ruler size={18} />
                        Diện tích (m²)
                    </h3>
                    <div className='re-filter-sidebar__price-range'>
                        <input
                            type='number'
                            placeholder='Từ'
                            className='re-filter-sidebar__input'
                        />
                        <span className='re-filter-sidebar__price-divider'>
                            -
                        </span>
                        <input
                            type='number'
                            placeholder='Đến'
                            className='re-filter-sidebar__input'
                        />
                    </div>
                </div>

                <div className='re-filter-sidebar__section'>
                    <h3 className='re-filter-sidebar__section-title'>
                        <MapPin size={18} />
                        Khu vực
                    </h3>
                    <div className='re-filter-sidebar__location-list'>
                        {locations.map((location) => (
                            <label
                                key={location}
                                className='re-filter-sidebar__location-item'
                            >
                                <input
                                    type='checkbox'
                                    className='re-filter-sidebar__checkbox'
                                />
                                <span className='re-filter-sidebar__location-label'>
                                    {location}
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <button className='re-filter-sidebar__apply-btn'>
                    <Filter size={20} />
                    Áp dụng bộ lọc
                </button>
            </div>
        </div>
    );
};

export default PropertySideBar;
