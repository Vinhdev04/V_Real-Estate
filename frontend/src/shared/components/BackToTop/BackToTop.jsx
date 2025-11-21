import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; 
import "./BackToTop.css"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId = null;

    const toggleVisibility = () => {
      // Kỹ thuật Debounce/Throttle: 
      // Nếu đang có một lệnh chờ (timeoutId), thì không làm gì cả (bỏ qua sự kiện scroll này)
      if (timeoutId) return;

      // Đặt lịch kiểm tra sau 150ms
      timeoutId = setTimeout(() => {
        // Kiểm tra điều kiện
        const currentScrollPos = window.scrollY; // Dùng window.scrollY thay cho pageYOffset (mới hơn)
        const shouldShow = currentScrollPos > 300;

        // Chỉ set state nếu trạng thái thực sự thay đổi (để tránh render thừa)
        setIsVisible((prev) => {
            if (prev !== shouldShow) {
                return shouldShow;
            }
            return prev;
        });

        // Xóa id để cho phép lần cuộn tiếp theo được xử lý
        timeoutId = null;
      }, 150); 
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup function: Quan trọng để xóa sự kiện khi component bị hủy
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Nếu chưa cần hiện thì không render nút ra DOM luôn (tối ưu hơn là dùng CSS hide)
  // Tuy nhiên nếu bạn có hiệu ứng fade-in/out trong CSS thì giữ nguyên logic class
  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Quay về đầu trang"
      title="Quay về đầu trang"
      style={{ 
        display: isVisible ? 'flex' : 'none', // Thêm dòng này để ẩn hoàn toàn khỏi DOM khi không cần
        opacity: isVisible ? 1 : 0 
      }} 
    >
      <ArrowUp size={20} className="icon" />
    </button>
  );
}