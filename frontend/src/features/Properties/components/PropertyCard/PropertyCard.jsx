import React from "react";
import { Card, Row, Col, Flex, Tag, Button, Space, Typography } from "antd";
import { PhoneOutlined, HeartOutlined, EyeOutlined, HomeOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "../../styles/properties.css";
import { data } from "../../services/data";

const { Title, Text } = Typography;

function PropertyCard() {
  return (
    <section className="fp-section">
      <div className="fp-header">
        <Title level={2} className="fp-title">Bất động sản nổi bật</Title>
        <Text type="secondary" className="fp-subtitle">
          Khám phá những dự án bất động sản chất lượng cao được lựa chọn kỹ lưỡng bởi đội ngũ chuyên gia
        </Text>
      </div>

      <Row gutter={[24, 32]} justify="center">
        {data?.map((property, index) => (
          <Col xs={24} sm={12} lg={8} key={property.id}>
            <Card hoverable className="fp-card" style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Image */}
              <div className="fp-image-wrapper">
                <LazyLoadImage alt={property.title} src={property.image} className="fp-image" />
                <div className="fp-overlay-tags">
                  <Tag className="fp-tag-type">{property.type}</Tag>
                  {property.isHot && <Tag className="fp-tag-hot">HOT</Tag>}
                  <Tag className="fp-tag-status">
                    {property.status}
                  </Tag>
                  <Button type="text" icon={<HeartOutlined />} className="fp-btn-favorite" />
                </div>
              </div>

              {/* Body - dùng flex để đẩy button xuống đáy */}
              <div className="fp-body">
                <div className="fp-content">
                  <Title level={4} className="fp-property-title">
                    {property.title}
                  </Title>

                  <div className="fp-location">
                    <EnvironmentOutlined style={{ marginRight: 6, color: '#888' }} />
                    {property.location}
                  </div>

                  <div className="fp-price-wrapper">
                    <Text strong className="fp-price">{property.price}</Text>
                    {property.area && <Text className="fp-area"> • {property.area}</Text>}
                  </div>

                  {/* Chỉ hiện khi có dữ liệu */}
                  {property.bedrooms ? (
                    <div className="fp-amenities">
                      <span>🛏️ {property.bedrooms} PN</span>
                      <span>🛁 {property.bathrooms} WC</span>
                    </div>
                  ) : (
                    <div className="fp-amenities-placeholder" />
                  )}
                </div>

                {/* Luôn cố định ở đáy */}
                <Flex gap={12} className="fp-actions-fixed">
                  <Button type="primary" icon={<PhoneOutlined />} className="fp-btn-contact">
                    Liên hệ
                  </Button>
                  <Button icon={<EyeOutlined />} className="fp-btn-detail">
                    Chi tiết
                  </Button>
                </Flex>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}

export default PropertyCard;