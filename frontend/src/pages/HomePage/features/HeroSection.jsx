
import React, { useEffect, useRef, useState } from "react";
import { Form, Select, Button, Row, Col } from "antd";

// Import styles
import "../styles/HeroSection.css";
import "../styles/DriverCustom.css"; 

// Import driver config
import { 
    heroTourSteps, 
    createDriverInstance, 
    restartTour 
} from "../constant/driverjs.config.js";

const { Option } = Select;

export default function HeroSection() {
    // useRef để lưu trữ instance của driver.js
    const driverRef = useRef(null);
    const [isTourActive, setIsTourActive] = useState(false);

    // Khởi tạo driver.js khi component mount
    useEffect(() => {
        // Tạo driver instance
        const driverObj = createDriverInstance({
            onDestroyStarted: () => {
                setIsTourActive(false);
            },
            onHighlightStarted: () => {
                setIsTourActive(true);
            },
        });
        
        driverRef.current = driverObj;

        // Cleanup khi component unmount
        return () => {
            if (driverRef.current) {
                try {
                    driverRef.current.destroy();
                } catch (error) {
                    console.warn("Cleanup driver:", error);
                }
            }
        };
    }, []);

    // Hàm bắt đầu tour
    const startTour = () => {
        restartTour(driverRef, heroTourSteps);
        setIsTourActive(true);
    };

    return (
        <div className={`hero-container ${isTourActive ? 'tour-active' : ''}`}>
            {/* Nút Hướng dẫn với animation */}
            <button
                onClick={startTour}
                className="tour-guide-btn"
                disabled={isTourActive}
            >
                Hướng dẫn sử dụng
            </button>

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
                                <Option value="hcm">TP.HCM</Option>
                                <Option value="hn">Hà Nội</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item className="form-item">
                            <Select defaultValue="" placeholder="Loại BĐS" className="custom-select">
                                <Option value="" disabled>Loại BĐS</Option>
                                <Option value="apartment">Căn hộ</Option>
                                <Option value="house">Nhà phố</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item className="form-item">
                            <Select defaultValue="" placeholder="Mức giá" className="custom-select">
                                <Option value="" disabled>Mức giá</Option>
                                <Option value="low">Dưới 1 tỷ</Option>
                                <Option value="high">Trên 5 tỷ</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="search-btn"> 
                                <span className="search-icon">Tìm kiếm</span>
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
                                <p>Khách hàng</p>
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
                                <p>Chuyên viên</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}