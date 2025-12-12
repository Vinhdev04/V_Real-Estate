import { useState, useMemo } from 'react';

/**
 * Custom hook để quản lý filters và logic lọc properties
 */
export const usePropertyFilters = (properties, pageSize = 6) => {
    const [filters, setFilters] = useState({
        type: 'all',
        location: '',
        minPrice: '',
        maxPrice: '',
        bedrooms: '',
        minArea: '',
        maxArea: '',
        search: ''
    });

    const [sortBy, setSortBy] = useState('default');
    const [currentPage, setCurrentPage] = useState(1);

    // Hàm xử lý thay đổi filter
    const handleFilterChange = (key, value) => {
        if (key === 'reset') {
            setFilters({
                type: 'all',
                location: '',
                minPrice: '',
                maxPrice: '',
                bedrooms: '',
                minArea: '',
                maxArea: '',
                search: ''
            });
            setCurrentPage(1);
        } else {
            setFilters((prev) => ({ ...prev, [key]: value }));
            setCurrentPage(1);
        }
    };

    // Lọc properties dựa trên filters
    const filteredProperties = useMemo(() => {
        let result = [...properties];

        // Lọc theo loại hình
        if (filters.type !== 'all') {
            result = result.filter((p) => p.type === filters.type);
        }

        // Lọc theo khu vực
        if (filters.location) {
            result = result.filter((p) =>
                p.location.includes(filters.location)
            );
        }

        // Lọc theo giá tối thiểu
        if (filters.minPrice) {
            result = result.filter(
                (p) => p.priceValue >= parseFloat(filters.minPrice) * 1000000000
            );
        }

        // Lọc theo giá tối đa
        if (filters.maxPrice) {
            result = result.filter(
                (p) => p.priceValue <= parseFloat(filters.maxPrice) * 1000000000
            );
        }

        // Lọc theo số phòng ngủ
        if (filters.bedrooms) {
            result = result.filter((p) => p.bedrooms >= filters.bedrooms);
        }

        // Lọc theo diện tích tối thiểu
        if (filters.minArea) {
            result = result.filter(
                (p) => p.area >= parseFloat(filters.minArea)
            );
        }

        // Lọc theo diện tích tối đa
        if (filters.maxArea) {
            result = result.filter(
                (p) => p.area <= parseFloat(filters.maxArea)
            );
        }

        // Lọc theo từ khóa tìm kiếm
        if (filters.search) {
            result = result.filter(
                (p) =>
                    p.title
                        .toLowerCase()
                        .includes(filters.search.toLowerCase()) ||
                    p.location
                        .toLowerCase()
                        .includes(filters.search.toLowerCase())
            );
        }

        // Sắp xếp kết quả
        switch (sortBy) {
            case 'price-asc':
                result.sort((a, b) => a.priceValue - b.priceValue);
                break;
            case 'price-desc':
                result.sort((a, b) => b.priceValue - a.priceValue);
                break;
            case 'rating':
                result.sort((a, b) => b.rating - a.rating);
                break;
            case 'area':
                result.sort((a, b) => b.area - a.area);
                break;
            default:
                break;
        }

        return result;
    }, [properties, filters, sortBy]);

    // Phân trang kết quả
    const paginatedProperties = useMemo(() => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        return filteredProperties.slice(startIndex, endIndex);
    }, [filteredProperties, currentPage, pageSize]);

    // Hàm xử lý thay đổi trang
    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Hàm xử lý thay đổi sắp xếp
    const handleSortChange = (newSortBy) => {
        setSortBy(newSortBy);
        setCurrentPage(1);
    };

    return {
        filters,
        sortBy,
        currentPage,
        filteredProperties,
        paginatedProperties,
        handleFilterChange,
        handlePageChange,
        handleSortChange
    };
};
