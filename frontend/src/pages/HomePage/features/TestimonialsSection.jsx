import React from "react";
import { Row, Col, Card, Avatar, Rate, Typography } from "antd";
import { 
  SafetyOutlined,   // ĐÃ SỬA
  ClockCircleOutlined, 
  CheckCircleOutlined, 
  DollarCircleOutlined 
} from "@ant-design/icons";
import "../styles/TestimonialsSection.css";

const { Title, Text } = Typography;

const mainTestimonial = {
  content: "Tôi rất hài lòng với dịch vụ tư vấn của công ty. Đội ngũ chuyên viên rất nhiệt tình và chuyên nghiệp, đã giúp tôi tìm được căn hộ ứng ý với mức giá hợp lý. Quy trình làm việc minh bạch và nhanh chóng.",
  name: "Nguyễn Văn Minh",
  position: "Giám đốc kinh doanh",
  company: "ABC Corporation",
  property: "Đã mua: Căn hộ Vinhomes Central Park",
  rating: 5
};

const smallTestimonials = [
  { name: "Trần Thị Lan", position: "Chủ doanh nghiệp", rating: 5 },
  { name: "Lê Hoàng Nam", position: "Kỹ sư IT", rating: 5 },
  { name: "Phạm Thị Hương", position: "Bác sĩ", rating: 5 },
];

const commitments = [
  { icon: <SafetyOutlined />, text: "100% Bảo mật thông tin" }, // ĐÃ SỬA
  { icon: <ClockCircleOutlined />, text: "Hỗ trợ 24/7" },
  { icon: <CheckCircleOutlined />, text: "Đảm bảo chất lượng" },
  { icon: <DollarCircleOutlined />, text: "Giá cả minh bạch" }
];
function TestimonialsSection() {
  return (
    <div className="testimonials-section container py-5">
      <div className="text-center mb-5">
        <Title level={2} className="section-title text-dark">
          Khách hàng nói gì về chúng tôi
        </Title>
        <Text type="secondary" className="section-subtitle">
          Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi
        </Text>
      </div>

      <Row gutter={[32, 32]} align="top">
        {/* Main Testimonial - Left */}
        <Col xs={24} lg={12}>
          <Card className="main-testimonial-card">
            <Rate disabled defaultValue={mainTestimonial.rating} className="stars" />
            <Text className="testimonial-content">
              "{mainTestimonial.content}"
            </Text>
            <div className="author-info mt-4">
              <Avatar size={56} src="https://randomuser.me/api/portraits/men/32.jpg" />
              <div className="author-details">
                <Text strong className="author-name">{mainTestimonial.name}</Text>
                <Text type="secondary" className="author-position">
                  {mainTestimonial.position} • {mainTestimonial.company}
                </Text>
              </div>
            </div>
            <div className="property-tag">
              {mainTestimonial.property}
            </div>
          </Card>
        </Col>

        {/* Small Testimonials - Right */}
        <Col xs={24} lg={12}>
          <div className="small-testimonials">
            <div className="highlight-review">
              <div className="highlight-header">
                <Avatar size={40} src="https://randomuser.me/api/portraits/men/68.jpg" />
                <div>
                  <Text strong>Nguyễn Văn Minh</Text>
                  <Text type="secondary" className="d-block">Giám đốc kinh doanh</Text>
                </div>
                <Rate disabled defaultValue={5} className="small-stars" />
              </div>
            </div>

            {smallTestimonials.map((item, index) => (
              <div key={index} className="small-review">
                <Avatar size={40} src={`https://randomuser.me/api/portraits/${index % 2 === 0 ? 'women' : 'men'}/${index + 20}.jpg`} />
                <div className="review-info">
                  <Text strong>{item.name}</Text>
                  <Text type="secondary" className="d-block">{item.position}</Text>
                </div>
                <Rate disabled defaultValue={item.rating} className="small-stars" />
              </div>
            ))}
          </div>
        </Col>
      </Row>

      {/* Commitments */}
      <Row gutter={[24, 24]} justify="center" className="commitments mt-5">
        {commitments.map((item, index) => (
          <Col xs={12} sm={6} md={3} key={index} className="text-center">
            <div className="commitment-item">
              <div className="commitment-icon">
                {item.icon}
              </div>
              <Text className="commitment-text">{item.text}</Text>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default TestimonialsSection;