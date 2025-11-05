export const HERO_DATA = {
  title: 'Tìm Kiếm Ngôi Nhà',
  highlight: 'Của Mơ Ước Bạn',
  description: 'Khám phá hàng nghìn bất động sản tuyệt vời tại Hồ Chí Minh và các thành phố lân cận.',
  primaryBtn: 'Tìm Ngay',
  secondaryBtn: 'Xem Demo',
  image: 'https://via.placeholder.com/600x400?text=Luxury+House'
};

export const PROPERTY_TYPES = [
  'Căn Hộ',
  'Nhà Phố',
  'Biệt Thự',
  'Đất Nền'
];

export const LOCATIONS = [
  'Quận 1',
  'Quận 2',
  'Quận 3',
  'Thảo Điền',
  'Bình Thạnh'
];

export const PRICE_RANGES = [
  { label: '0 - 1 Tỷ', min: 0, max: 1 },
  { label: '1 - 3 Tỷ', min: 1, max: 3 },
  { label: '3 - 5 Tỷ', min: 3, max: 5 },
  { label: '5+ Tỷ', min: 5, max: 100 }
];

export const FEATURED_PROPERTIES = [
  {
    id: 1,
    name: 'Biệt Thự Cao Cấp Thảo Điền',
    type: 'Biệt Thự',
    location: 'Thảo Điền',
    price: 15,
    bedrooms: 4,
    bathrooms: 3,
    area: 250,
    image: 'https://via.placeholder.com/400x300?text=Property+1',
    featured: true
  },
  {
    id: 2,
    name: 'Căn Hộ Cao Cấp Quận 1',
    type: 'Căn Hộ',
    location: 'Quận 1',
    price: 5,
    bedrooms: 3,
    bathrooms: 2,
    area: 120,
    image: 'https://via.placeholder.com/400x300?text=Property+2',
    featured: false
  },
  {
    id: 3,
    name: 'Nhà Phố 3 Tầng Bình Thạnh',
    type: 'Nhà Phố',
    location: 'Bình Thạnh',
    price: 8,
    bedrooms: 3,
    bathrooms: 2,
    area: 80,
    image: 'https://via.placeholder.com/400x300?text=Property+3',
    featured: true
  }
];

export const FEATURES = [
  {
    id: 1,
    icon: '🏠',
    title: '1000+ Bất Động Sản',
    description: 'Danh sách bất động sản đa dạng để bạn lựa chọn'
  },
  {
    id: 2,
    icon: '👥',
    title: 'Tư Vấn Chuyên Nghiệp',
    description: 'Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng hỗ trợ'
  },
  {
    id: 3,
    icon: '💰',
    title: 'Giá Cạnh Tranh',
    description: 'Các mức giá tốt nhất trên thị trường'
  },
  {
    id: 4,
    icon: '⭐',
    title: 'Đáng Tin Cậy',
    description: 'Được tin tưởng bởi hàng vạn khách hàng'
  }
];