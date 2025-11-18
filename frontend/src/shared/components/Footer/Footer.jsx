import React from "react";
import { Row, Col, Typography, Space } from "antd";
import { 
  FacebookFilled, 
  TwitterOutlined, 
  LinkedinFilled,
  GithubFilled,
  HomeOutlined,
  RocketOutlined,
  TeamOutlined,
  SafetyOutlined,
  ApartmentOutlined,
  ShopOutlined,
  EnvironmentOutlined,
  GoldOutlined,
  BulbOutlined,
  SolutionOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  PhoneOutlined,
  QuestionCircleOutlined,
  FileProtectOutlined,
  LockOutlined
} from "@ant-design/icons";
import "./Footer.css";
import logoW from "../../../assets/images/logoW.png";

const { Title, Text } = Typography;

function Footer() {
  return (
    <footer className="main-footer">
      <div className="container py-5">
        <Row gutter={[32, 40]}>
          {/* Company Info */}
          <Col xs={24} md={6} className="text-start">
            <div className="footer-logo-wrapper">
              <img className="navbar__logo" src={logoW} alt="logo" />
              <span className="footer-logo">VaniizIT</span>
            </div>
            <Text className="footer-desc">
              Chúng tôi là đơn vị hàng đầu trong lĩnh vực bất động sản, mang đến những giải pháp tối ưu cho khách hàng với dịch vụ chuyên nghiệp và uy tín.
            </Text>
            <Space size={16} className="social-links">
              <a href="#" aria-label="Facebook">
                <FacebookFilled />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterOutlined />
              </a>
              <a href="#" aria-label="LinkedIn">
                <LinkedinFilled />
              </a>
              <a href="#" aria-label="GitHub">
                <GithubFilled />
              </a>
            </Space>
          </Col>

          {/* About */}
          <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-start">
            <Title level={4} className="footer-title footer-head">
              Về chúng tôi
            </Title>
            <ul className="footer-links">
              <li>
                <a href="#">
                  <HomeOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Giới thiệu
                </a>
              </li>
              <li>
                <a href="#">
                  <RocketOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Tầm nhìn sứ mệnh
                </a>
              </li>
              <li>
                <a href="#">
                  <TeamOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Đội ngũ
                </a>
              </li>
              <li>
                <a href="#">
                  <SafetyOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Tuyển dụng
                </a>
              </li>
            </ul>
          </Col>

          {/* Projects */}
          <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-start">
            <Title level={4} className="footer-title footer-head">
              Dự án
            </Title>
            <ul className="footer-links">
              <li>
                <a href="#">
                  <ApartmentOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Căn hộ cao cấp
                </a>
              </li>
              <li>
                <a href="#">
                  <ShopOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Biệt thự
                </a>
              </li>
              <li>
                <a href="#">
                  <HomeOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Nhà phố
                </a>
              </li>
              <li>
                <a href="#">
                  <EnvironmentOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Đất nền
                </a>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col xs={12} sm={6} md={4} className="d-flex flex-column align-items-start">
            <Title level={4} className="footer-title footer-head">
              Dịch vụ
            </Title>
            <ul className="footer-links">
              <li>
                <a href="#">
                  <BulbOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Tư vấn đầu tư
                </a>
              </li>
              <li>
                <a href="#">
                  <SolutionOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Môi giới
                </a>
              </li>
              <li>
                <a href="#">
                  <SafetyCertificateOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Quản lý tài sản
                </a>
              </li>
              <li>
                <a href="#">
                  <AuditOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Pháp lý
                </a>
              </li>
            </ul>
          </Col>

          {/* Support */}
          <Col xs={12} sm={6} md={6} className="d-flex flex-column align-items-start">
            <Title level={4} className="footer-title footer-head">
              Hỗ trợ
            </Title>
            <ul className="footer-links">
              <li>
                <a href="#">
                  <PhoneOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Liên hệ
                </a>
              </li>
              <li>
                <a href="#">
                  <QuestionCircleOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  FAQ
                </a>
              </li>
              <li>
                <a href="#">
                  <FileProtectOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Chính sách
                </a>
              </li>
              <li>
                <a href="#">
                  <LockOutlined style={{ fontSize: '14px', marginRight: '6px' }} />
                  Bảo mật
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <div className="footer-bottom">
          <Text type="secondary" className="text">
            Copyright 2025 by VaniizIT
          </Text>
          <div className="powered-by">
             by VaniizIT Technology
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;