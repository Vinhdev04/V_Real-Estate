// features/ProfilePage/services/mockData.js

export const mockUserProfile = {
  avatar: 'https://ui-avatars.com/api/?name=Nguyen+Van+A&size=200&background=4f46e5&color=fff',
  username: 'Nguyễn Văn A',
  email: 'nguyenvana@gmail.com',
  phone: '+84 123 456 789',
  location: '123 Đường Lê Lợi, Quận 1, TP.HCM',
  bio: 'Chuyên gia bất động sản với hơn 5 năm kinh nghiệm',
  joinDate: 'Tháng 1, 2024'
};

export const mockListings = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400',
    title: 'Căn hộ cao cấp view biển tuyệt đẹp',
    address: '456 Park Avenue, London',
    price: '25 tỷ VNĐ',
    bedrooms: 2,
    bathrooms: 1
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400',
    title: 'Biệt thự hiện đại gần công viên',
    address: '789 Oxford Street, London',
    price: '45 tỷ VNĐ',
    bedrooms: 3,
    bathrooms: 2
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=400',
    title: 'Nhà phố 3 tầng trung tâm quận 1',
    address: '123 Nguyễn Huệ, Quận 1, TP.HCM',
    price: '35 tỷ VNĐ',
    bedrooms: 4,
    bathrooms: 3
  }
];

export const mockMessages = [
  { 
    id: 1, 
    sender: 'Trần Thị B', 
    preview: 'Tôi muốn xem căn hộ của bạn vào cuối tuần này...', 
    time: '1 giờ trước' 
  },
  { 
    id: 2, 
    sender: 'Lê Văn C', 
    preview: 'Giá của căn biệt thự có thể thương lượng không?...', 
    time: '2 giờ trước' 
  },
  { 
    id: 3, 
    sender: 'Phạm Thị D', 
    preview: 'Cho tôi hỏi thêm thông tin về nhà phố...', 
    time: '3 giờ trước' 
  },
  { 
    id: 4, 
    sender: 'Hoàng Văn E', 
    preview: 'Tôi rất quan tâm đến bất động sản này...', 
    time: '5 giờ trước' 
  }
];