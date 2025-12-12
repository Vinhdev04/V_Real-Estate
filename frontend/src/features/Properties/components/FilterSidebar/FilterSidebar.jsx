import React from 'react';
import { X } from 'lucide-react';
import './FilterSidebar.css';

const propertyTypesData = [
    { value: 'all', label: 'Tất cả' },
    { value: 'apartment', label: 'Căn hộ' },
    { value: 'house', label: 'Nhà riêng' },
    { value: 'villa', label: 'Biệt thự' },
    { value: 'land', label: 'Đất nền' }
];

const locationsData = [
    'Quận 1',
    'Quận 2',
    'Quận 3',
    'Quận 5',
    'Quận 7',
    'Thủ Đức',
    'Bình Thạnh',
    'Phú Nhuận'
];

const FilterSidebar = ({ filters, onFilterChange, isOpen, onClose }) => {
    return (
        <>
            <div
                className={`filter-sidebar__overlay ${
                    isOpen ? 'filter-sidebar__overlay--visible' : ''
                }`}
                onClick={onClose}
            />
            <aside
                className={`filter-sidebar ${
                    isOpen ? 'filter-sidebar--open' : ''
                }`}
            >
                <div className='filter-sidebar__header'>
                    <h2 className='filter-sidebar__title'>Bộ lọc tìm kiếm</h2>
                    <button className='filter-sidebar__close' onClick={onClose}>
                        <X size={24} />
                    </button>
                </div>

                <div className='filter-sidebar__content'>
                    {/* Property Type Filter */}
                    <div className='filter-sidebar__section'>
                        <h3 className='filter-sidebar__section-title'>
                            Loại hình
                        </h3>
                        <div className='filter-sidebar__options'>
                            {propertyTypesData.map((type) => (
                                <label
                                    key={type.value}
                                    className='filter-sidebar__option'
                                >
                                    <input
                                        type='radio'
                                        name='propertyType'
                                        value={type.value}
                                        checked={filters.type === type.value}
                                        onChange={(e) =>
                                            onFilterChange(
                                                'type',
                                                e.target.value
                                            )
                                        }
                                        className='filter-sidebar__radio'
                                    />
                                    <span className='filter-sidebar__option-label'>
                                        {type.label}
                                    </span>
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Location Filter */}
                    <div className='filter-sidebar__section'>
                        <h3 className='filter-sidebar__section-title'>
                            Khu vực
                        </h3>
                        <select
                            className='filter-sidebar__select'
                            value={filters.location}
                            onChange={(e) =>
                                onFilterChange('location', e.target.value)
                            }
                        >
                            <option value=''>Tất cả khu vực</option>
                            {locationsData.map((loc) => (
                                <option key={loc} value={loc}>
                                    {loc}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Price Range Filter */}
                    <div className='filter-sidebar__section'>
                        <h3 className='filter-sidebar__section-title'>
                            Khoảng giá (tỷ)
                        </h3>
                        <div className='filter-sidebar__range'>
                            <input
                                type='number'
                                placeholder='Từ'
                                value={filters.minPrice}
                                onChange={(e) =>
                                    onFilterChange('minPrice', e.target.value)
                                }
                                className='filter-sidebar__input'
                            />
                            <span className='filter-sidebar__range-separator'>
                                -
                            </span>
                            <input
                                type='number'
                                placeholder='Đến'
                                value={filters.maxPrice}
                                onChange={(e) =>
                                    onFilterChange('maxPrice', e.target.value)
                                }
                                className='filter-sidebar__input'
                            />
                        </div>
                    </div>

                    {/* Bedrooms Filter */}
                    <div className='filter-sidebar__section'>
                        <h3 className='filter-sidebar__section-title'>
                            Số phòng ngủ
                        </h3>
                        <div className='filter-sidebar__chips'>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button
                                    key={num}
                                    className={`filter-sidebar__chip ${
                                        filters.bedrooms === num
                                            ? 'filter-sidebar__chip--active'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        onFilterChange(
                                            'bedrooms',
                                            filters.bedrooms === num ? '' : num
                                        )
                                    }
                                >
                                    {num}+
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Area Filter */}
                    <div className='filter-sidebar__section'>
                        <h3 className='filter-sidebar__section-title'>
                            Diện tích (m²)
                        </h3>
                        <div className='filter-sidebar__range'>
                            <input
                                type='number'
                                placeholder='Từ'
                                value={filters.minArea}
                                onChange={(e) =>
                                    onFilterChange('minArea', e.target.value)
                                }
                                className='filter-sidebar__input'
                            />
                            <span className='filter-sidebar__range-separator'>
                                -
                            </span>
                            <input
                                type='number'
                                placeholder='Đến'
                                value={filters.maxArea}
                                onChange={(e) =>
                                    onFilterChange('maxArea', e.target.value)
                                }
                                className='filter-sidebar__input'
                            />
                        </div>
                    </div>

                    <button
                        className='filter-sidebar__reset'
                        onClick={() => onFilterChange('reset')}
                    >
                        Đặt lại bộ lọc
                    </button>
                </div>
            </aside>
        </>
    );
};

export default FilterSidebar;
