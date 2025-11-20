import React, { useState, useEffect } from 'react';
import { Home, Search, MapPin, Building2, ArrowRight, Phone, Mail } from 'lucide-react';
import './NotFoundPage.css';
import { NavLink } from 'react-router-dom';

export default function NotFoundPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const floatingIcons = [
    { Icon: Building2, delay: 0, duration: 3, position: { left: '20%', top: '30%' } },
    { Icon: Home, delay: 0.5, duration: 3.5, position: { left: '50%', top: '45%' } },
    { Icon: MapPin, delay: 1, duration: 4, position: { left: '80%', top: '60%' } },
  ];

  const propertyTypes = [
    { icon: Building2, title: 'Căn Hộ Cao Cấp', desc: 'Khám phá ngay' },
    { icon: Home, title: 'Nhà Phố', desc: 'Xem danh sách' },
    { icon: MapPin, title: 'Vị Trí Đẹp', desc: 'Tìm hiểu thêm' }
  ];

  return (
    <div className="notfound">
      
    
      <div className="notfound__background">
        <div className="notfound__background-grid" />
      </div>

    
      {[...Array(20)].map((_, i) => (
        <div
          key={`particle-${i}`}
          className="notfound__particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}

   
      <div 
        className="notfound__blur-circle notfound__blur-circle--blue"
        style={{
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
        }}
      />
      <div 
        className="notfound__blur-circle notfound__blur-circle--purple"
        style={{
          transform: `translate(${mousePosition.x * -0.03}px, ${mousePosition.y * -0.03}px)`,
        }}
      />

   
      {floatingIcons.map(({ Icon, delay, duration, position }, idx) => (
        <div
          key={`float-icon-${idx}`}
          className="notfound__floating-icon"
          style={{
            left: position.left,
            top: position.top,
            animation: `floatSlow ${duration}s ease-in-out infinite`,
            animationDelay: `${delay}s`
          }}
        >
          <Icon size={80} />
        </div>
      ))}

  
      <div className={`notfound__content ${isVisible ? 'notfound__content--visible' : 'notfound__content--hidden'}`}>
        
  
        <div className="notfound__number-wrapper">
          <h1 className="notfound__number">404</h1>
          <div className="notfound__number-icon">
            <Home size={100} />
          </div>
        </div>

  
        <h2 className="notfound__title">
          Không Tìm Thấy Bất Động Sản
        </h2>
        
   
        <p className="notfound__description">
          Xin lỗi, trang bạn đang tìm kiếm không tồn tại hoặc đã được chuyển đi. 
          Hãy khám phá các bất động sản tuyệt vời khác của chúng tôi!
        </p>

 
        <div className="notfound__buttons">
          <NavLink to="/" className="notfound__button notfound__button--primary">
            <Home size={20} className="notfound__button-icon" />
            Về Trang Chủ
            <ArrowRight size={20} className="notfound__button-icon notfound__button-icon--arrow" />
          </NavLink>
          
          <NavLink to="/" className="notfound__button notfound__button--secondary">
            <Search size={20} className="notfound__button-icon" />
            Tìm Kiếm BĐS
          </NavLink>
        </div>

       
        <div className="notfound__properties">
          {propertyTypes.map((item, idx) => (
            <div key={`property-${idx}`} className="notfound__property-card">
              <item.icon className="notfound__property-icon" size={32} />
              <h3 className="notfound__property-title">{item.title}</h3>
              <p className="notfound__property-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        
        <div className="notfound__contact">
          <a href="tel:+84123456789" className="notfound__contact-link">
            <Phone size={18} />
            <span>+84 123 456 789</span>
          </a>
          <a href="mailto:contact@realestate.com" className="notfound__contact-link">
            <Mail size={18} />
            <span>contact@realestate.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}
