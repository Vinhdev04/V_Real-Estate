import React from "react";
import { Row, Col, Card, Typography, List } from "antd";
import { 
  SearchOutlined, 
  HomeOutlined, 
  StockOutlined, 
  FileTextOutlined, 
  AuditOutlined, 
  BankOutlined,
  CheckCircleFilled 
} from "@ant-design/icons";
import "../styles/ServicesSection.css";

const { Title, Text } = Typography;

const services = [
  {
    icon: <SearchOutlined />,
    title: "Tư vấn mua bán",
    description: "Đội ngũ chuyên viên giàu kinh nghiệm sẽ tư vấn và hỗ trợ bạn tìm kiếm bất động sản phù hợp nhất.",
    features: [
      "Tư vấn miễn phí",
      "Thẩm định giá",
      "Hỗ trợ pháp lý",
      "Đàm phán giá"
    ],
    link: "Tìm hiểu thêm"
  },
  {
    icon: <HomeOutlined />,
    title: "Quản lý tài sản",
    description: "Dịch vụ quản lý bất động sản chuyên nghiệp, giúp tối ưu hóa lợi nhuận từ tài sản của bạn.",
    features: [
      "Quản lý cho thuê",
      "Bảo trì định kỳ",
      "Thu chi minh bạch",
      "Báo cáo chi tiết"
    ],
    link: "Tìm hiểu thêm"
  },
  {
    icon: <StockOutlined />,
    title: "Đầu tư BĐS",
    description: "Phân tích thị trường và tư vấn đầu tư bất động sản hiệu quả với lợi nhuận tối ưu.",
    features: [
      "Phân tích thị trường",
      "Dự báo giá",
      "Tư vấn đầu tư",
      "Quản lý rủi ro"
    ],
    link: "Tìm hiểu thêm"
  },
  {
    icon: <FileTextOutlined />,
    title: "Hỗ trợ pháp lý",
    description: "Đội ngũ luật sư chuyên nghiệp hỗ trợ các thủ tục pháp lý liên quan đến bất động sản.",
    features: [
      "Soạn thảo hợp đồng",
      "Thẩm tra pháp lý",
      "Làm sổ đỏ",
      "Giải quyết tranh chấp"
    ],
    link: "Tìm hiểu thêm"
  },
  {
    icon: <AuditOutlined />,
    title: "Thẩm định giá",
    description: "Dịch vụ thẩm định giá bất động sản chính xác, khách quan dựa trên dữ liệu thị trường.",
    features: [
      "Thẩm định chính xác",
      "Báo cáo chi tiết",
      "Cập nhật thị trường",
      "Tư vấn định giá"
    ],
    link: "Tìm hiểu thêm"
  },
  {
    icon: <BankOutlined />,
    title: "Hỗ trợ vay vốn",
    description: "Kết nối với các ngân hàng uy tín, hỗ trợ thủ tục vay vốn mua nhà với lãi suất ưu đãi.",
    features: [
      "Lãi suất ưu đãi",
      "Thủ tục nhanh chóng",
      "Tư vấn gói vay",
      "Hỗ trợ hồ sơ"
    ],
    link: "Tìm hiểu thêm"
  }
];

function ServicesSection() {
  return (
    <div className="services-section container py-5">
      <div className="text-center mb-5">
        <Title level={2} className="section-title">
          Dịch vụ của chúng tôi
        </Title>
        <Text type="secondary" className="section-subtitle">
          Chúng tôi cung cấp đầy đủ các dịch vụ bất động sản từ tư vấn, mua bán đến quản lý và đầu tư
        </Text>
      </div>

      <Row gutter={[24, 32]} justify="center">
        {services.map((service, index) => (
          <Col xs={24} sm={12} lg={8} key={index}>
            <Card className="service-card" hoverable>
              <div className="service-icon">
                {service.icon}
              </div>
              <Title level={4} className="service-title">
                {service.title}
              </Title>
              <Text className="service-description">
                {service.description}
              </Text>

              <List
                className="service-features"
                dataSource={service.features}
                renderItem={(item) => (
                  <List.Item>
                    <CheckCircleFilled className="check-icon" />
                    <span>{item}</span>
                  </List.Item>
                )}
              />

              <a href="#" className="service-link">
                {service.link} →
              </a>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ServicesSection;