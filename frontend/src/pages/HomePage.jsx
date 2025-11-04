import React, { useState } from 'react';
import { Search, MapPin, Home, TrendingUp, Users, Award } from 'lucide-react';
import './HomePage.css';

export default function HomePage() {
  const [formData, setFormData] = useState({
    propertyType: '',
    location: '',
    priceRange: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bg-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-600">
              V_RealEstate
            </div>
            <div className="hidden gap-8 md:flex">
              <a href="#home" className="transition hover:text-blue-600">Trang Chủ</a>
              <a href="#properties" className="transition hover:text-blue-600">Bất Động Sản</a>
              <a href="#about" className="transition hover:text-blue-600">Về Chúng Tôi</a>
              <a href="#contact" className="transition hover:text-blue-600">Liên Hệ</a>
            </div>
            <button className="px-6 py-2 text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
              Đăng Nhập
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 text-white bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container px-4 mx-auto">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-5xl font-bold leading-tight">
                Tìm Kiếm Ngôi Nhà <span className="text-blue-300">Của Mơ Ước</span> Bạn
              </h1>
              <p className="mb-8 text-xl text-blue-100">
                Khám phá hàng nghìn bất động sản tuyệt vời tại Hồ Chí Minh và các thành phố lân cận.
              </p>
              <div className="flex gap-4">
                <button className="px-8 py-3 font-semibold text-blue-600 transition bg-white rounded-lg hover:bg-blue-50">
                  Tìm Ngay
                </button>
                <button className="px-8 py-3 font-semibold text-white transition border-2 border-white rounded-lg hover:bg-white hover:text-blue-600">
                  Xem Chi Tiết
                </button>
              </div>
            </div>
            <div className="p-8 bg-blue-500 bg-opacity-30 rounded-2xl backdrop-blur-sm">
              <div className="p-4 text-gray-800 bg-white rounded-xl">
                <img src="https://via.placeholder.com/400x300?text=Luxury+House" alt="Featured" className="w-full mb-4 rounded-lg" />
                <p className="font-semibold">Biệt Thự Cao Cấp - Thảo Điền</p>
                <p className="text-lg font-bold text-blue-600">15 Tỷ VND</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="relative z-10 p-8 -mt-8 bg-white shadow-lg rounded-xl">
            <h2 className="mb-6 text-2xl font-bold">Tìm Kiếm Bất Động Sản</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
              <div>
                <label className="block mb-2 text-sm font-semibold">Loại Bất Động Sản</label>
                <select 
                  name="propertyType"
                  value={formData.propertyType}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>-- Chọn Loại --</option>
                  <option>Căn Hộ</option>
                  <option>Nhà Phố</option>
                  <option>Biệt Thự</option>
                  <option>Đất Nền</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Khu Vực</label>
                <select 
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>-- Chọn Khu Vực --</option>
                  <option>Quận 1</option>
                  <option>Quận 2</option>
                  <option>Quận 3</option>
                  <option>Thảo Điền</option>
                </select>
              </div>
              <div>
                <label className="block mb-2 text-sm font-semibold">Khoảng Giá</label>
                <select 
                  name="priceRange"
                  value={formData.priceRange}
                  onChange={handleInputChange}
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <option>-- Chọn Khoảng Giá --</option>
                  <option>0 - 1 Tỷ</option>
                  <option>1 - 3 Tỷ</option>
                  <option>3 - 5 Tỷ</option>
                  <option>5+ Tỷ</option>
                </select>
              </div>
              <div className="flex items-end">
                <button className="flex items-center justify-center w-full gap-2 px-6 py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                  <Search size={20} /> Tìm Kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section id="properties" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Bất Động Sản Nổi Bật</h2>
            <p className="text-lg text-gray-600">Những dự án hàng đầu được khuyên dùng nhất</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden transition transform bg-white shadow-lg rounded-xl hover:shadow-2xl hover:scale-105">
                <img src={`https://via.placeholder.com/400x250?text=Property+${item}`} alt={`Property ${item}`} className="object-cover w-full h-250" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">Chung Cư Cao Cấp</h3>
                    <span className="px-3 py-1 text-sm font-semibold text-blue-600 bg-blue-100 rounded-full">Hot</span>
                  </div>
                  <div className="flex items-center mb-4 text-gray-600">
                    <MapPin size={18} className="mr-2" />
                    <span>Quận 1, TPHCM</span>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-blue-600">5 Tỷ VND</span>
                    <span className="text-sm text-gray-600">50 m²</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 mb-4 text-sm text-gray-600">
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">3</span>
                      <span>Phòng Ngủ</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">2</span>
                      <span>Phòng Tắm</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-semibold">1</span>
                      <span>Bếp</span>
                    </div>
                  </div>
                  <button className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                    Xem Chi Tiết
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Tại Sao Chọn V_RealEstate?</h2>
            <p className="text-lg text-gray-600">Những lợi ích mà chúng tôi mang lại</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-4">
            <div className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Home className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-2 text-lg font-bold">1000+ Bất Động Sản</h3>
              <p className="text-gray-600">Danh sách bất động sản đa dạng để bạn lựa chọn</p>
            </div>
            
            <div className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Users className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Tư Vấn Chuyên Nghiệp</h3>
              <p className="text-gray-600">Đội ngũ chuyên viên giàu kinh nghiệm sẵn sàng hỗ trợ</p>
            </div>
            
            <div className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <TrendingUp className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Giá Cạnh Tranh</h3>
              <p className="text-gray-600">Các mức giá tốt nhất trên thị trường</p>
            </div>
            
            <div className="p-8 text-center transition bg-white shadow-lg rounded-xl hover:shadow-xl">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full">
                <Award className="text-blue-600" size={32} />
              </div>
              <h3 className="mb-2 text-lg font-bold">Đáng Tin Cậy</h3>
              <p className="text-gray-600">Được tin tưởng bởi hàng vạn khách hàng</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container px-4 mx-auto">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Liên Hệ Với Chúng Tôi</h2>
            <p className="text-lg text-gray-600">Chúng tôi sẵn sàng trả lời mọi câu hỏi của bạn</p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-bold">Địa Chỉ</h3>
                <p className="text-gray-600">Lầu 5, Tòa Nhà ABC, 123 Nguyễn Hữu Cảnh, Bình Thạnh, TP.HCM</p>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-bold">Điện Thoại</h3>
                <p className="text-gray-600">+84 28 1234 5678</p>
              </div>
              
              <div className="mb-8">
                <h3 className="mb-2 text-lg font-bold">Email</h3>
                <p className="text-gray-600">info@vrealestage.vn</p>
              </div>

              <div className="mb-8">
                <h3 className="mb-2 text-lg font-bold">Giờ Làm Việc</h3>
                <p className="text-gray-600">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                <p className="text-gray-600">Thứ 7 - Chủ Nhật: 9:00 - 15:00</p>
              </div>
            </div>
            
            <form className="p-8 bg-gray-50 rounded-xl">
              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="Họ và Tên" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <input 
                  type="text" 
                  placeholder="Chủ Đề" 
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div className="mb-6">
                <textarea 
                  placeholder="Nội Dung Tin Nhắn" 
                  rows="5"
                  className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                ></textarea>
              </div>
              <button type="submit" className="w-full py-3 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700">
                Gửi Tin Nhắn
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-white bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="grid gap-8 mb-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 text-lg font-bold">V_RealEstate</h3>
              <p className="text-gray-400">Nền tảng bất động sản hàng đầu tại Việt Nam</p>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Về Chúng Tôi</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition hover:text-white">Giới Thiệu</a></li>
                <li><a href="#" className="transition hover:text-white">Blog</a></li>
                <li><a href="#" className="transition hover:text-white">Tuyển Dụng</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Hỗ Trợ</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="transition hover:text-white">Câu Hỏi Thường Gặp</a></li>
                <li><a href="#" className="transition hover:text-white">Liên Hệ</a></li>
                <li><a href="#" className="transition hover:text-white">Chính Sách</a></li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Kết Nối</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 transition hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 transition hover:text-white">Instagram</a>
                <a href="#" className="text-gray-400 transition hover:text-white">Twitter</a>
              </div>
            </div>
          </div>
          
          <div className="pt-8 text-center text-gray-400 border-t border-gray-800">
            <p>&copy; 2024 V_RealEstate. Bản quyền được bảo lưu.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
