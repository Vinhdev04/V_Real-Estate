
import "driver.js/dist/driver.css";
import { driver } from 'driver.js';
// Định nghĩa các bước tour cho HeroSection
export const heroTourSteps = [
    {
        element: ".hero-title",
        popover: {
            title: "🏠 Chào mừng!",
            description: "Đây là tiêu đề chính của trang tìm kiếm bất động sản. Bắt đầu hành trình tìm ngôi nhà mơ ước của bạn!",
            position: "bottom",
        },
    },
    {
        element: ".search-form",
        popover: {
            title: "🔍 Tìm kiếm nhanh",
            description: "Chọn loại giao dịch, khu vực, loại nhà và mức giá để tìm kiếm bất động sản phù hợp với nhu cầu của bạn.",
            position: "bottom",
        },
    },
    {
        element: ".search-btn",
        popover: {
            title: "✨ Bắt đầu tìm",
            description: "Nhấn nút này để xem các kết quả bất động sản phù hợp với tiêu chí bạn đã chọn.",
            position: "left",
        },
    },
    {
        element: ".stats-container",
        popover: {
            title: "🏆 Đáng tin cậy",
            description: "Hơn 10.000 BĐS đa dạng, 5.000+ khách hàng hài lòng và 15 năm kinh nghiệm trong ngành.",
            position: "top",
        },
    },
];

// Cấu hình mặc định cho driver.js
export const driverConfig = {
    animate: true,
    allowClose: true,
    overlayClickNext: false,
    smoothScroll: true,
    
    // Văn bản tiếng Việt
    doneBtnText: "✓ Hoàn thành",
    closeBtnText: "✕",
    nextBtnText: "Tiếp theo",
    prevBtnText: "Quay lại",
    
    // Hiển thị tiến trình
    showProgress: true,
    progressText: "{{current}}/{{total}}",
    
    // Các class tùy chỉnh
    popoverClass: "driver-popover-custom",
    overlayOpacity: 0.75,
    
    // Padding xung quanh phần tử được highlight
    stagePadding: 10,
    stageRadius: 8,
    
    // Hiển thị nút đóng
    showButtons: ['next', 'previous', 'close'],
    
    // Callbacks
    onDestroyStarted: () => {
        console.log("Tour kết thúc");
    },
    onHighlightStarted: (element) => {
        console.log("Đang highlight:", element);
    },
};

// Hàm khởi tạo driver instance
export const createDriverInstance = (customConfig = {}) => {
    return driver({
        ...driverConfig,
        ...customConfig,
    });
};

// Hàm bắt đầu tour với delay
export const startTourWithDelay = (driverInstance, steps, delay = 300) => {
    setTimeout(() => {
        try {
            driverInstance.setSteps(steps);
            driverInstance.drive();
        } catch (error) {
            console.error("Lỗi khi khởi động tour:", error);
        }
    }, delay);
};

// Hàm reset và restart tour
export const restartTour = (driverRef, steps) => {
    // Hủy instance cũ
    if (driverRef.current) {
        try {
            driverRef.current.destroy();
        } catch (error) {
            console.warn("Lỗi khi hủy driver:", error);
        }
        driverRef.current = null;
    }
    
    // Tạo instance mới
    const newDriver = createDriverInstance();
    driverRef.current = newDriver;
    
    // Khởi động tour
    startTourWithDelay(newDriver, steps, 100);
    
    return newDriver;
};