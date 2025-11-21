import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Team.css';
import { teamMembers, features, stats ,propertyTypes} from '../services/mockData';
import BackToTop from '../../../shared/components/BackToTop/BackToTop';


const TeamHeader = () => (
  <header className="team-page-header">
    <div className="header-overlay"></div>
    <div className="header-bg-circle header-bg-circle--top"></div>
    <div className="header-bg-circle header-bg-circle--bottom"></div>
    
    <div className="header-content">
      <div className="header-content-wrapper">
        <div className="header-badge">
          <span className="header-badge-text">🏡 Nền tảng BĐS thế hệ mới</span>
        </div>
        <h1 className="header-title">
          Tìm nhà thông thái
        </h1>
        <h2 className="header-subtitle">
          Thổi mới an cư
        </h2>
        <p className="header-description">
          Nền tảng bất động sản thông minh, kết nối mọi nhu cầu.
        </p>
        <p className="header-text">
          Radanhadat.vn là nền tảng đăng tin bất động sản thế hệ mới, ra mắt vào tháng 10 năm 2024, với mục tiêu nâng cao trải nghiệm tìm kiếm và cung cấp các công cụ hỗ trợ người mua và thuê bất động sản. Chúng tôi mang đến một không gian kỹ thuật số hoàn hảo, giúp tối ưu hóa quá trình tìm kiếm, so sánh và quản lý các tin đăng bất động sản.
        </p>
      </div>
    </div>
  </header>
);

const StatsSection = () => {

  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className={`stat-card-bg stat-card-bg--${stat.color}`}></div>
              <div className={`stat-icon stat-icon--${stat.color}`}>
                <stat.icon className="stat-icon-svg" />
              </div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExpertiseSection = () => (
  <section className="expertise-section">
    <div className="expertise-overlay"></div>
    <div className="expertise-bg-circle"></div>
    
    <div className="expertise-container">
      <div className="expertise-grid">
        <div className="expertise-content">
          <h2 className="expertise-title">Chuyên môn & Kinh nghiệm</h2>
          <p className="expertise-text">
            Chúng tôi tự hào sở hữu đội ngũ lãnh đạo có 10-20 năm kinh nghiệm trong ngành và các chuyên viên am hiểu sâu sắc về thị trường bất động sản. Với sự tận tâm và chuyên nghiệp, đội ngũ của Radanhadat.vn luôn đặt sự hài lòng của khách hàng lên hàng đầu.
          </p>
          <p className="expertise-text">
            Chúng tôi sẽ đồng hành cùng bạn trong suốt quá trình mua, bán, thuê và cho thuê bất động sản, từ vấn đề xu hướng và biến động thị trường, phân tích đầu tư, thông tin quy hoạch, tiến độ và cộng đồng cư dân.
          </p>
        </div>
        
        <div className="expertise-stats-grid">
          <div className="expertise-stat-card">
            <div className="expertise-stat-value">15+</div>
            <div className="expertise-stat-label">Năm kinh nghiệm</div>
          </div>
          <div className="expertise-stat-card">
            <div className="expertise-stat-value">50+</div>
            <div className="expertise-stat-label">Chuyên gia BĐS</div>
          </div>
          <div className="expertise-stat-card">
            <div className="expertise-stat-value">1,000+</div>
            <div className="expertise-stat-label">Dự án đã tư vấn</div>
          </div>
          <div className="expertise-stat-card">
            <div className="expertise-stat-value">100%</div>
            <div className="expertise-stat-label">Tận tâm phục vụ</div>
          </div>
        </div>
      </div>
    </div>
  </section>
);


const FeaturesSection = () => {
 
  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Tại sao chọn V_Real-Estate?</h2>
          <p className="features-description">
            Nền tảng công nghệ hiện đại, kết hợp trí tuệ nhân tạo và dữ liệu lớn để mang đến trải nghiệm tốt nhất
          </p>
        </div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className={`feature-icon feature-icon--${feature.gradient}`}>
                <feature.icon className="feature-icon-svg" />
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const TeamMemberCard = ({ member, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className={`team-member ${isVisible ? 'team-member--visible' : ''}`}>
      <div className="team-member-image-wrapper">
        <img
          src={member.image}
          alt={member.name}
          className="team-member-image"
        />
        <div className="team-member-overlay"></div>
        <div className="team-member-info">
          <h3 className="team-member-name">{member.name}</h3>
          <p className="team-member-position">{member.position}</p>
        </div>
      </div>
    </div>
  );
};

const TeamGrid = () => (
  <section className="team-grid-section">
    <div className="team-grid-container">
      <div className="team-grid-header">
        <div className="team-grid-badge">
          <span className="team-grid-badge-text">👥 Đội ngũ chuyên nghiệp</span>
        </div>
        <h2 className="team-grid-title">Đội ngũ sáng lập</h2>
        <p className="team-grid-description">
          Những người dẫn dắt với hơn 15 năm kinh nghiệm trong lĩnh vực bất động sản và công nghệ
        </p>
      </div>
      
      <div className="team-members-grid">
        {teamMembers.map((member, index) => (
          <TeamMemberCard key={member.id} member={member} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const PropertyTypesSection = () => {


  return (
    <section className="property-types-section">
      <div className="property-types-container">
        <div className="property-types-header">
          <h2 className="property-types-title">Danh mục bất động sản đa dạng</h2>
          <p className="property-types-description">
            Từ căn hộ hiện đại đến villa sang trọng, đáp ứng mọi nhu cầu an cư và đầu tư
          </p>
        </div>
        
        <div className="property-types-grid">
          {propertyTypes.map((type, index) => (
            <NavLink to="/properties" key={index} className="property-type-card">
              <div className="property-type-image-wrapper">
                <img 
                  src={type.image} 
                  alt={type.name}
                  className="property-type-image"
                />
              </div>
              <div className="property-type-overlay"></div>
              <div className="property-type-info">
                <h3 className="property-type-name">{type.name}</h3>
                <p className="property-type-count">{type.count} tin đăng</p>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};


const CTASection = () => (
  <section className="cta-section">
    <div className="cta-overlay"></div>
    <div className="cta-bg-circle cta-bg-circle--left"></div>
    <div className="cta-bg-circle cta-bg-circle--right"></div>
    
    <div className="cta-container">
      <h2 className="cta-title">Liên hệ với chúng tôi</h2>
      <p className="cta-description">
        Chúng tôi muốn trở thành đối tác đáng tin cậy, mang đến giải pháp và sự hài lòng tối ưu cho các doanh nghiệp và khách hàng. Với Radanhadat.vn, hành trình tìm kiếm và mua - bán bất động sản của bạn sẽ trở nên dễ dàng và hiệu quả hơn bao giờ hết.
      </p>
      <NavLink to="/contact" className="cta-button text-text-decoration-none">
        Liên hệ ngay
        <span className="cta-button-arrow">→</span>
      </NavLink>
    </div>
  </section>
);

export default function TeamPage() {
  return (
    <div className="team-page">
      <TeamHeader />
      <StatsSection />
      <ExpertiseSection />
      <PropertyTypesSection />
      <FeaturesSection />
      <TeamGrid />
    
      <CTASection />
      <BackToTop/>
    </div>
  );
}