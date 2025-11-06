
import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react'; 
import "./BackToTop.css"
export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Hiển thị nút khi cuộn xuống > 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Cuộn mượt lên đầu trang
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
    
      <button
        className={`back-to-top ${isVisible ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Quay về đầu trang"
        title="Quay về đầu trang"
      >
        <ArrowUp size={20} className="icon" />
      </button>
    </>
  );
}