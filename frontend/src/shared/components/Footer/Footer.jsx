import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { FacebookFilled, TwitterOutlined, GoogleCircleFilled, LinkedinFilled } from "@ant-design/icons";
import "./Footer.css";

const { Title, Text } = Typography;

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container py-5">
        <Row gutter={[32, 32]}>
          {/* Logo & Description */}
          <Col xs={24} md={6}>
            <div className="footer-logo">logo</div>
            <Text className="footer-desc">
              Chúng tôi là đơn vị hàng đầu trong lĩnh vực bất động sản, mang đến những giải pháp tối ưu cho khách hàng với dịch vụ chuyên nghiệp và uy tín.
            </Text>
            <Space size={12} className="social-links mt-4">
              <a href="#"><FacebookFilled /></a>
              <a href="#"><TwitterOutlined /></a>
              <a href="#"><GoogleCircleFilled /></a>
              <a href="#"><LinkedinFilled /></a>
            </Space>
          </Col>

          {/* About */}
          <Col xs={12} sm={6} md={4}>
            <Title level={4} className="footer-title">Về chúng tôi</Title>
            <ul className="footer-links">
              <li><a href="#">Giới thiệu</a></li>
              <li><a href="#">Tầm nhìn sứ mệnh</a></li>
              <li><a href="#">Đội ngũ</a></li>
              <li><a href="#">Tuyển dụng</a></li>
            </ul>
          </Col>

          {/* Projects */}
          <Col xs={12} sm={6} md={4}>
            <Title level={4} className="footer-title">Dự án</Title>
            <ul className="footer-links">
              <li><a href="#">Căn hộ cao cấp</a></li>
              <li><a href="#">Biệt thự</a></li>
              <li><a href="#">Nhà phố</a></li>
              <li><a href="#">Đất nền</a></li>
            </ul>
          </Col>

          {/* Services */}
          <Col xs={12} sm={6} md={4}>
            <Title level={4} className="footer-title">Dịch vụ</Title>
            <ul className="footer-links">
              <li><a href="#">Tư vấn đầu tư</a></li>
              <li><a href="#">Môi giới</a></li>
              <li><a href="#">Quản lý tài sản</a></li>
              <li><a href="#">Pháp lý</a></li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={12} sm={6} md={6}>
            <Title level={4} className="footer-title">Hỗ trợ</Title>
            <ul className="footer-links">
              <li><a href="#">Liên hệ</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Chính sách</a></li>
              <li><a href="#">Bảo mật</a></li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text type="secondary" className="text">©Copyright 2025 by VaniizIT</Text>
          
        </div>
      </div>
    </footer>
  );
}

export default Footer;