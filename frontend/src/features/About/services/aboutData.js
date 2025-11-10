// src/features/About/services/aboutData.js
import { 
  HomeOutlined, 
  TeamOutlined, 
  TrophyOutlined, 
  SafetyOutlined,
  RiseOutlined,
  HeartOutlined,
  CheckCircleOutlined
} from '@ant-design/icons';
import React from 'react';

export const heroData = {
  title: 'Về VaniizIT Real Estate',
  subtitle: 'Đối tác tin cậy trong hành trình đầu tư và sở hữu bất động sản của bạn'
};

export const statsData = [
  { key: 'properties', value: 10000, suffix: '+', title: 'Bất động sản' },
  { key: 'customers', value: 5000, suffix: '+', title: 'Khách hàng' },
  { key: 'experience', value: 15, suffix: '+', title: 'Năm kinh nghiệm' },
  { key: 'experts', value: 50, suffix: '+', title: 'Chuyên viên' }
];

export const storyData = {
  title: 'Câu chuyện của chúng tôi',
  description: `VaniizIT Real Estate được thành lập với sứ mệnh mang đến những giải pháp 
    bất động sản toàn diện, chuyên nghiệp và đáng tin cậy. Với hơn 15 năm kinh nghiệm, 
    chúng tôi tự hào là cầu nối giữa khách hàng và những cơ hội đầu tư sinh lời bền vững.`
};

export const timelineData = {
  title: 'Hành trình phát triển',
  milestones: [
    { 
      year: '2010',
      title: 'Khởi đầu',
      event: 'Thành lập công ty với 5 nhân viên đầu tiên. Bắt đầu hoạt động tại thị trường TP.HCM với tầm nhìn trở thành đơn vị tư vấn BĐS hàng đầu.' 
    },
    { 
      year: '2013',
      title: 'Mở rộng',
      event: 'Mở rộng sang thị trường Hà Nội và các tỉnh thành lớn. Thiết lập mạng lưới đối tác với các chủ đầu tư uy tín.' 
    },
    { 
      year: '2016',
      title: 'Cột mốc quan trọng',
      event: 'Đạt mốc 1000 giao dịch thành công. Nhận giải thưởng "Top 10 Sàn BĐS uy tín nhất Việt Nam".' 
    },
    { 
      year: '2019',
      title: 'Công nghệ số',
      event: 'Ra mắt nền tảng công nghệ VaniizIT. Ứng dụng AI và Big Data vào tư vấn đầu tư BĐS.' 
    },
    { 
      year: '2023',
      title: 'Đối tác chiến lược',
      event: 'Trở thành đối tác chiến lược của các chủ đầu tư lớn như Vingroup, Novaland, Vinhomes. Mở rộng dịch vụ quản lý tài sản chuyên nghiệp.' 
    }
  ]
};

export const servicesData = {
  title: 'Dịch vụ của chúng tôi',
  subtitle: 'Chúng tôi cung cấp đầy đủ các dịch vụ bất động sản từ tư vấn, mua bán đến quản lý và đầu tư',
  services: [
    {
      icon: <HomeOutlined style={{ fontSize: 48, color: '#4A90E2' }} />,
      title: 'Tư vấn mua bán',
      description: 'Đội ngũ chuyên viên giàu kinh nghiệm sẽ tư vấn và hỗ trợ bạn tìm kiếm bất động sản phù hợp nhất',
      features: ['Tư vấn miễn phí', 'Thẩm định giá', 'Hỗ trợ pháp lý', 'Đàm phán giá']
    },
    {
      icon: <SafetyOutlined style={{ fontSize: 48, color: '#4A90E2' }} />,
      title: 'Quản lý tài sản',
      description: 'Dịch vụ quản lý bất động sản chuyên nghiệp, giúp tối ưu hóa lợi nhuận từ tài sản của bạn',
      features: ['Quản lý cho thuê', 'Bảo trì định kỳ', 'Thu chi minh bạch', 'Báo cáo chi tiết'],
      highlighted: true
    },
    {
      icon: <RiseOutlined style={{ fontSize: 48, color: '#4A90E2' }} />,
      title: 'Đầu tư BDS',
      description: 'Phân tích thị trường và tư vấn đầu tư bất động sản hiệu quả với lợi nhuận tối ưu',
      features: ['Phân tích thị trường', 'Dự báo giá', 'Tư vấn đầu tư', 'Quản lý rủi ro']
    }
  ]
};

export const valuesData = {
  title: 'Giá trị cốt lõi',
  subtitle: 'Những giá trị mà chúng tôi luôn hướng đến trong mọi hoạt động',
  values: [
    {
      icon: <HeartOutlined />,
      title: 'Uy tín',
      description: 'Luôn đặt chữ tín lên hàng đầu trong mọi giao dịch'
    },
    {
      icon: <TeamOutlined />,
      title: 'Chuyên nghiệp',
      description: 'Đội ngũ nhân viên được đào tạo bài bản, có chứng chỉ hành nghề'
    },
    {
      icon: <TrophyOutlined />,
      title: 'Chất lượng',
      description: 'Cam kết mang đến dịch vụ và sản phẩm tốt nhất cho khách hàng'
    },
    {
      icon: <CheckCircleOutlined />,
      title: 'Minh bạch',
      description: 'Thông tin rõ ràng, minh bạch trong mọi khâu giao dịch'
    }
  ]
};

export const ctaData = {
  title: 'Sẵn sàng bắt đầu hành trình của bạn?',
  subtitle: 'Hãy để chúng tôi đồng hành cùng bạn tìm kiếm bất động sản lý tưởng',
  buttonText: 'Liên hệ ngay'
};