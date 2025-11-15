import { 
  Home, Building2, TrendingUp, Landmark, 
  PaintBucket, FileCheck, Phone, Mail,
  Check, ChevronRight, ArrowRight
} from 'lucide-react';

export const services = [
    {
      id: 1,
      icon: Home,
      title: 'Tư vấn mua bán',
      description: 'Hỗ trợ khách hàng tìm kiếm và mua bán bất động sản phù hợp với nhu cầu và ngân sách',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600',
      features: [
        'Tư vấn miễn phí',
        'Thẩm định giá',
        'Hỗ trợ pháp lý',
        'Đàm phán giá'
      ],
      price: 'Miễn phí tư vấn',
      priceLink: true
    },
    {
      id: 2,
      icon: Building2,
      title: 'Quản lý tài sản',
      description: 'Dịch vụ quản lý và vận hành bất động sản chuyên nghiệp, tối ưu hóa lợi nhuận cho chủ sở hữu',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600',
      features: [
        'Quản lý thuê',
        'Bảo trì định kỳ',
        'Thu chi minh bạch',
        'Báo cáo tài chính'
      ],
      price: '2-5 triệu/tháng'
    },
    {
      id: 3,
      icon: TrendingUp,
      title: 'Thẩm định giá',
      description: 'Đánh giá chính xác giá trị bất động sản dựa trên thị trường và các yếu tố ảnh hưởng',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600',
      features: [
        'Báo cáo chi tiết',
        'Phân tích thị trường',
        'Đánh giá chuyên nghiệp',
        'Tư vấn đầu tư'
      ],
      price: '2-5 triệu/lần'
    },
    {
      id: 4,
      icon: Landmark,
      title: 'Hỗ trợ vay vốn',
      description: 'Kết nối với các ngân hàng uy tín, hỗ trợ thủ tục vay mua nhà với lãi suất ưu đãi',
      image: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=600',
      features: [
        'Tư vấn gói vay',
        'Hỗ trợ hồ sơ',
        'Đàm phán lãi suất',
        'Theo dõi giải ngân'
      ],
      price: 'Miễn phí hỗ trợ',
      priceLink: true
    },
    {
      id: 5,
      icon: PaintBucket,
      title: 'Thiết kế nội thất',
      description: 'Dịch vụ thiết kế và thi công nội thất chuyên nghiệp, tạo không gian sống hoàn hảo',
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600',
      features: [
        'Thiết kế 3D',
        'Thi công trọn gói',
        'Bảo hành 2 năm',
        'Tư vấn phong thủy'
      ],
      price: '500k-1tr/m²'
    },
    {
      id: 6,
      icon: FileCheck,
      title: 'Pháp lý bất động sản',
      description: 'Hỗ trợ các thủ tục pháp lý, đảm bảo giao dịch an toàn và minh bạch',
      image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600',
      features: [
        'Kiểm tra pháp lý',
        'Soạn thảo hợp đồng',
        'Làm sổ đỏ',
        'Tư vấn thuế'
      ],
      price: '5-15 triệu'
    }
  ];

export const processSteps = [
    {
      number: '1',
      icon: Phone,
      title: 'Liên hệ tư vấn',
      description: 'Khách hàng liên hệ để được tư vấn miễn phí về nhu cầu'
    },
    {
      number: '2',
      icon: TrendingUp,
      title: 'Phân tích yêu cầu',
      description: 'Chúng tôi phân tích chi tiết yêu cầu và đưa ra giải pháp phù hợp'
    },
    {
      number: '3',
      icon: FileCheck,
      title: 'Thực hiện dịch vụ',
      description: 'Triển khai dịch vụ theo quy trình chuyên nghiệp'
    },
    {
      number: '4',
      icon: Check,
      title: 'Bàn giao kết quả',
      description: 'Bàn giao kết quả và hỗ trợ khách hàng sau dịch vụ'
    }
  ];