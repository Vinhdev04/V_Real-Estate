import React from "react";
import { Row, Col, Typography } from "antd";
import { 
  CalendarOutlined, 
  UserOutlined, 
  ClockCircleOutlined, 
  TeamOutlined,
  TrophyOutlined,
  StarOutlined,
  SafetyOutlined,
  CustomerServiceOutlined
} from "@ant-design/icons";
import "../styles/AchievementsSection.css";

const { Title, Text } = Typography;

const achievements = [
  {
    icon: <CalendarOutlined />,
    number: "10.000+",
    title: "Bất động sản",
    subtitle: "Đa dạng các loại hình"
  },
  {
    icon: <UserOutlined />,
    number: "5.000+",
    title: "Khách hàng hài lòng",
    subtitle: "Tin tưởng và đồng hành"
  },
  {
    icon: <ClockCircleOutlined />,
    number: "15+",
    title: "Năm kinh nghiệm",
    subtitle: "Uy tín trên thị trường"
  },
  {
    icon: <TeamOutlined />,
    number: "50+",
    title: "Chuyên viên tư vấn",
    subtitle: "Đội ngũ chuyên nghiệp"
  }
];

const highlights = [
  { icon: <TrophyOutlined />, text: "Top 10 Công ty BĐS" },
  { icon: <StarOutlined />, text: "Dịch vụ 5 sao" },
  { icon: <SafetyOutlined />, text: "Uy tín hàng đầu" },
  { icon: <CustomerServiceOutlined />, text: "Hỗ trợ 24/7" }
];

function AchievementsSection() {
  return (
    <div className="achievements-section">
      <div className="achievements-overlay">
        <div className="container py-5">
          <div className="text-center mb-5">
            <Title level={2} className="section-title">
              Thành tựu của chúng tôi
            </Title>
            <Text className="section-subtitle">
              Những con số ấn tượng khẳng định vị thế và uy tín của chúng tôi trong ngành bất động sản
            </Text>
          </div>

          {/* Main Stats */}
          <Row gutter={[32, 40]} justify="center" className="main-stats">
            {achievements.map((item, index) => (
              <Col xs={12} sm={6} key={index} className="text-center">
                <div className="stat-item">
                  <div className="stat-icon">
                    {item.icon}
                  </div>
                  <Title level={1} className="stat-number">
                    {item.number}
                  </Title>
                  <Title level={4} className="stat-title">
                    {item.title}
                  </Title>
                  <Text className="stat-subtitle">
                    {item.subtitle}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>

          {/* Highlights */}
          <Row gutter={[24, 24]} justify="center" className="highlights mt-5">
            {highlights.map((item, index) => (
              <Col xs={12} sm={6} md={3} key={index} className="text-center">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    {item.icon}
                  </div>
                  <Text className="highlight-text">
                    {item.text}
                  </Text>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default AchievementsSection;