import { useState } from 'react';

/**
 * Custom hook để quản lý danh sách yêu thích
 */
export const useFavorites = () => {
    const [favorites, setFavorites] = useState([]);

    // Thêm hoặc xóa khỏi danh sách yêu thích
    const toggleFavorite = (id) => {
        setFavorites((prev) =>
            prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
        );
    };

    // Kiểm tra xem item có trong danh sách yêu thích không
    const isFavorite = (id) => {
        return favorites.includes(id);
    };

    // Xóa tất cả yêu thích
    const clearFavorites = () => {
        setFavorites([]);
    };

    // Lấy số lượng yêu thích
    const favoritesCount = favorites.length;

    return {
        favorites,
        toggleFavorite,
        isFavorite,
        clearFavorites,
        favoritesCount
    };
};
