import React, { useState, useEffect } from 'react';
import EditProfileTab from './EditProfileTab'; // Đường dẫn tới file của bạn

const ProfilePage = () => {
  // 1. Khởi tạo state với giá trị mặc định rỗng
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phone: '',
    birthDate: '',
    location: '',
    bio: '',
    avatar: ''
  });

  // 2. Dùng useEffect để lấy dữ liệu từ localStorage khi component được mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      
      // 3. Map dữ liệu từ localStorage vào state của form
      // Lưu ý: Cần kiểm tra kỹ tên trường (key) trả về từ Backend (ví dụ: username vs name, telephone vs phone)
      setUserData({
        name: parsedUser.username || parsedUser.name || '', // Ưu tiên username nếu có
        email: parsedUser.email || '',
        phone: parsedUser.telephone || parsedUser.phone || '', // Backend thường trả về telephone
        birthDate: parsedUser.birthDate || '',
        location: parsedUser.address || parsedUser.location || '',
        bio: parsedUser.bio || '',
        avatar: parsedUser.avatar || 'https://via.placeholder.com/150' // Avatar mặc định nếu không có
      });
    }
  }, []);

  // Hàm xử lý lưu (gọi API update profile)
  const handleSave = async () => {
    console.log("Dữ liệu chuẩn bị gửi lên server:", userData);
    // Tại đây bạn sẽ gọi API update profile (cần viết thêm service)
  };

  const handleCancel = () => {
    console.log("Hủy bỏ chỉnh sửa");
    // Logic reset lại form hoặc quay lại trang trước
  };

  return (
    <div className="profile-page-container">
      {/* Truyền state và hàm set xuống component con */}
      <EditProfileTab 
        userData={userData} 
        setUserData={setUserData} 
        onSave={handleSave}
        onCancel={handleCancel}
      />
    </div>
  );
};

export default ProfilePage;