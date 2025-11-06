import React from "react";
import { Row, Col, Button, Typography, Space } from "antd";
import { PhoneOutlined, CalendarOutlined, MessageOutlined } from "@ant-design/icons";
import "../styles/CTASection.css";

const { Title, Text } = Typography;

function CTASection() {
  return (
    <div className="cta-section">
      <div className="cta-overlay">
        <div className="container py-5">
          <div className="text-center mb-5">
            <Title level={1} className="cta-title">
              Sẵn sàng tìm kiếm ngôi nhà mơ ước?
            </Title>
            <Text className="cta-subtitle">
              Hãy để chúng tôi đồng hành cùng bạn trong hành trình tìm kiếm và sở hữu bất động sản lý tưởng
            </Text>
          </div>

          {/* Action Cards */}
          <Row gutter={[24, 24]} justify="center" className="action-cards">
            <Col xs={24} sm={8}>
              <div className="action-card call">
                <div className="action-icon">
                  <PhoneOutlined />
                </div>
                <Text strong className="action-title">Gọi ngay</Text>
                <Text type="secondary" className="action-desc">Hotline 24/7</Text>
                <Button className="action-btn">1900 1234</Button>
              </div>
            </Col>

            <Col xs={24} sm={8}>
              <div className="action-card appointment">
                <div className="action-icon">
                  <CalendarOutlined />
                </div>
                <Text strong className="action-title">Đặt lịch hẹn</Text>
                <Text type="secondary" className="action-desc">Tư vấn trực tiếp</Text>
                <Button type="primary" className="action-btn">Đặt lịch ngay</Button>
              </div>
            </Col>

            <Col xs={24} sm={8}>
              <div className="action-card chat">
                <div className="action-icon">
                  <MessageOutlined />
                </div>
                <Text strong className="action-title">Chat online</Text>
                <Text type="secondary" className="action-desc">Hỗ trợ tức thì</Text>
                <Button className="action-btn">Chat ngay</Button>
              </div>
            </Col>
          </Row>

          {/* Search & Catalog */}
          <div className="search-bar mt-5 text-center">
            <Space size={16}>
              <Button type="primary" size="large" icon={<span className="search-icon">Q</span>} className="search-btn">
                Tìm kiếm bất động sản
              </Button>
              <Button size="large" icon={<span className="download-icon">↓</span>} className="catalog-btn">
                Tải catalog
              </Button>
            </Space>
          </div>

          {/* Contact Info */}
          <Row gutter={[32, 16]} justify="center" className="contact-info mt-5">
            <Col xs={24} sm={8} md={4} className="text-center">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <Text strong>Địa chỉ</Text>
                <Text type="secondary">123 Nguyễn Huệ, Q.1, TP.HCM</Text>
              </div>
            </Col>
            <Col xs={24} sm={8} md={4} className="text-center">
              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <Text strong>Điện thoại</Text>
                <Text type="secondary">1900 1234 - 0901 234 567</Text>
              </div>
            </Col>
            <Col xs={24} sm={8} md={4} className="text-center">
              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <Text strong>Email</Text>
                <Text type="secondary">info@realestate.com</Text>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default CTASection;