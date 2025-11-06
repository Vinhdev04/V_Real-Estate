import React from "react";
import { Card, Row, Col,Flex, Tag, Button, Space, Typography } from "antd";
import { PhoneOutlined ,HeartOutlined , EyeOutlined } from "@ant-design/icons";

import "../styles/FeaturedProperties.css";
import {data} from "../constant/data.js";
const { Title, Text } = Typography;



function FeaturedProperties() {
  return (
    <div className="featured-section container py-5">
      <div className="text-center mb-5">
        <Title level={2} className="section-title">
          Bất động sản nổi bật
        </Title>
        <Text type="secondary" className="section-subtitle">
          Khám phá những dự án bất động sản chất lượng cao được lựa chọn kỹ lưỡng bởi đội ngũ chuyên gia
        </Text>
      </div>

      <Row gutter={[24, 32]} justify="center">
        {data?.map((property) => (
          <Col xs={24} sm={12} lg={8} key={property.id}>
            <Card
              hoverable
              cover={
                <div className="property-image-wrapper">
                  <img alt={property.title} src={property.image} className="property-image" />
                  <div className="property-tags">
                    <Tag color="#4e8ef7" className="tag-type">
                      {property.type}
                    </Tag>
                    <Tag color={property.status === "Mua" ? "#DCFCDF" : "#52c41a"} className="tag-status">
                      {property.status}
                    </Tag>
                    <Button type="link" icon={<HeartOutlined />} className="favorite-btn" />
                  </div>
                </div>
              }
              className="property-card"
            >
              <div className="property-content">
                <Title level={4} className="property-title">
                  {property.title}
                </Title>
                <Text type="secondary" className="property-location">
                  📍 {property.location}
                </Text>

                <div className="property-price">
                  <Text strong className="price-text">
                    {property.price}
                  </Text>
                  {property.area && (
                    <Text type="secondary" className="area-text">
                      {" "}• {property.area}
                    </Text>
                  )}
                </div>

                {property.bedrooms && (
                  <div className="property-amenities">
                    <Text>
                      🛏️ {property.bedrooms} PN • 🛁 {property.bathrooms} WC
                    </Text>
                  </div>
                )}

                <Space className="property-actions mt-3">
                     <Flex gap="small" wrap>
                        <Button color="cyan" variant="solid" icon={<PhoneOutlined />}>
                            Liên hệ
                        </Button>
                        <Button color="cyan" variant="outlined"  icon={<EyeOutlined />}>
                            Chi tiết
                        </Button>
                     </Flex>
                </Space>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default FeaturedProperties;