import React from "react";
import { Form, Select, Button, Row, Col } from "antd";
import "../styles/HeroSection.css";

const { Option } = Select;

function HeroSection() {
  return (
    <div className="hero-container">
      {/* Overlay để làm tối nền */}
      <div className="hero-overlay"></div>

      <div className="hero-content container text-center">
        <h1 className="hero-title">
          Tìm kiếm ngôi nhà <br />
          <span>hoàn hảo của bạn</span>
        </h1>
        <p className="hero-subtitle">
          Khám phá hàng nghìn bất động sản chất lượng cao với dịch vụ tư vấn chuyên nghiệp
        </p>

        <div className="search-box">
          <Form layout="inline" className="search-form">
            <Form.Item className="form-item">
              <Select defaultValue="Mua" className="custom-select">
                <Option value="Mua">Mua</Option>
                <Option value="Thuê">Thuê</Option>
                <Option value="Bán">Bán</Option>
              </Select>
            </Form.Item>

            <Form.Item className="form-item">
              <Select defaultValue="" placeholder="Khu vực" className="custom-select">
                <Option value="" disabled>Khu vực</Option>
                <Option value="hn">Hà Nội</Option>
                <Option value="hcm">TP.HCM</Option>
                <Option value="dn">Đà Nẵng</Option>
                <Option value="bd">Bình Dương</Option>
              </Select>
            </Form.Item>

            <Form.Item className="form-item">
              <Select defaultValue="" placeholder="Loại BĐS" className="custom-select">
                <Option value="" disabled>Loại BĐS</Option>
                <Option value="apartment">Căn hộ</Option>
                <Option value="house">Nhà phố</Option>
                <Option value="villa">Biệt thự</Option>
                <Option value="land">Đất nền</Option>
              </Select>
            </Form.Item>

            <Form.Item className="form-item">
              <Select defaultValue="" placeholder="Mức giá" className="custom-select">
                <Option value="" disabled>Mức giá</Option>
                <Option value="low">Dưới 1 tỷ</Option>
                <Option value="medium">1 - 5 tỷ</Option>
                <Option value="high">Trên 5 tỷ</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="search-btn">
                <span className="search-icon">🔍</span> Tìm kiếm
              </Button>
            </Form.Item>
          </Form>
        </div>

        <div className="stats-container">
          <Row gutter={[16, 16]} justify="center">
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Bất động sản</p>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <h3>5,000+</h3>
                <p>Khách hàng hài lòng</p>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <h3>15+</h3>
                <p>Năm kinh nghiệm</p>
              </div>
            </Col>
            <Col xs={12} sm={6}>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Chuyên viên tư vấn</p>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;